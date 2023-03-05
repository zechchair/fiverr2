import React from "react";
import Head from "next/head";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import Image from "next/image";
import { GetServerSideProps } from "next";
import Cookies from "cookies";
import { User, verify } from "../../controller/Auth";
import styles from "../../styles/admin/Login.module.scss";

export const getServerSideProps: GetServerSideProps = async ({ req, res }) => {
  const cookies = new Cookies(req, res);
  const token = cookies?.get("token") || null;
  const user: User = await verify(token);

  if (user !== null)
    return {
      redirect: {
        permanent: false,
        destination: "/admin",
      },
    };

  return {
    props: {
      token: token,
      user: user,
    },
  };
};

type state = {
  username: string;
  password: string;
  error: boolean;
};

type props = {
  token: string;
  user: User;
};

class Login extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      error: false,
    };

    this.login = this.login.bind(this);
  }

  async login(e) {
    e.preventDefault();
    const { username, password } = this.state;

    if (username === "" || password === "")
      return this.setState({ error: true });

    this.setState({ error: false });

    const result = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify({ username, password }),
    }).then((res) => res.json());

    if (result?.error) return this.setState({ error: true });

    window.location.href = "/admin";
  }

  render() {
    return (
      <div>
        <Head>
          <title>Admin Panel | Login</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header user={this.props.user} />

        <main className={styles.content}>
          <form className={styles.login} onSubmit={this.login}>
            <div className={styles.logo}>
              <Image src="/klarna-black.svg" alt="" layout="fill" />
            </div>

            <input
              className={this.state.error ? styles.error : ""}
              type="text"
              placeholder="Username"
              value={this.state.username}
              onChange={(e) => this.setState({ username: e.target.value })}
            />
            <input
              className={this.state.error ? styles.error : ""}
              type="password"
              placeholder="Passwort"
              value={this.state.password}
              onChange={(e) => this.setState({ password: e.target.value })}
            />

            <button type="submit">Anmelden</button>
          </form>
        </main>

        <Footer />
      </div>
    );
  }
}

export default Login;
