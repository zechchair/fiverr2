import React from "react";
import Head from "next/head";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import { NextRouter, withRouter } from "next/router";
import { GetServerSideProps } from "next";
import Cookies from "cookies";
import { verify, User, Account } from "../../controller/Auth";
import styles from "../../styles/admin/Dashboard.module.scss";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);
  const token = cookies?.get("token") || null;
  const user: User = await verify(token);

  if (user === null)
    return {
      redirect: {
        permanent: false,
        destination: "/admin/login",
      },
    };

  return {
    props: {
      domain: process.env.DOMAIN,
      token: token,
      user: user,
    },
  };
};

type state = {
  password: string;
  password_repeat: string;
  error: string;
};

type props = {
  router: NextRouter;
  domain: string;
  token: string;
  user: User;
};

class Dashboard extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      password: "",
      password_repeat: "",
      error: "",
    };

    this.dashboard = this.dashboard.bind(this);
  }

  async dashboard(e) {
    e.preventDefault();
    const { token, router } = this.props;
    const { password, password_repeat } = this.state;

    if (password !== "" && password !== password_repeat)
      return this.setState({ error: "Passwörter sind nicht gleich." });

    this.setState({ error: "" });

    const account = {} as Account;

    const result = await fetch("/api/account/change", {
      method: "POST",
      body: JSON.stringify({
        token,
        account,
        password: password !== "" ? password : "",
      }),
    }).then((res) => res.json());

    if (result?.error) return this.setState({ error: result.error });
    if(password !== "")
      document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    router.reload();
  }

  render() {
    return (
      <div>
        <Head>
          <title>Admin Panel | Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header user={this.props.user} />

        <main className={styles.content}>
          <form className={styles.dashboard} onSubmit={this.dashboard}>
            <h4 className={styles.title}>Dashboard</h4>

            <p>Verwalte deinen Account</p>

            <div className={styles.textContainer}>
              <label htmlFor="password">Passwort</label>
              <input
                id="password"
                type="password"
                placeholder="Passwort"
                onChange={(e) => this.setState({ password: e.target.value })}
              />
            </div>

            <div className={styles.textContainer}>
              <label htmlFor="password_repeat">Passwort wiederholen</label>
              <input
                id="password_repeat"
                type="password"
                placeholder="Passwort wiederholen"
                onChange={(e) =>
                  this.setState({ password_repeat: e.target.value })
                }
              />
            </div>

            <p className={styles.error}>{this.state.error}</p>

            <div className={styles.buttonContainer}>
              <button type="submit">Speichern</button>
            </div>
          </form>
        </main>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Dashboard);
