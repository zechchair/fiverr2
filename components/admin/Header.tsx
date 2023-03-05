import React from "react";
import { NextRouter, withRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/admin/Header.module.scss";
import { User } from "../../controller/Auth";

type state = {};

type props = {
  router: NextRouter;
  user: User;
};

class Header extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.logout = this.logout.bind(this);
  }

  logout() {
    document.cookie = `token=; path=/; expires=Thu, 01 Jan 1970 00:00:01 GMT`;
    window.location.href = "/admin/login";
  }

  render() {
    return (
      <header className={styles.header}>
        <div className={styles.logo}>
          <Image src="/klarna-black.svg" alt="" layout="fill" />
        </div>

        {this.props.user !== null && (
          <ul className={styles.list}>
            <li
              className={
                this.props.router.route.includes("/admin/generator")
                  ? styles.active
                  : ""
              }
            >
              <Link href="/admin/generator">
                urlGen
              </Link>
            </li>
            <li
              className={
                this.props.router.route.includes("/admin/links")
                  ? styles.active
                  : ""
              }
            >
              <Link href="/admin/links">
                Links
              </Link>
            </li>
            <li
              className={
                this.props.router.route.includes("/admin/logs")
                  ? styles.active
                  : ""
              }
            >
              <Link href="/admin/logs">
                Logs
              </Link>
            </li>
            <li
              className={
                this.props.router.route.includes("/admin/dashboard")
                  ? styles.active
                  : ""
              }
            >
              <Link href="/admin/dashboard">
                Dashboard
              </Link>
            </li>
          </ul>
        )}

        {this.props.user !== null && (
          <div className={styles.user}>
            <span>{this.props.user?.username}</span>

            <button className={styles.logout} onClick={this.logout}>
              Abmelden
              <i className={styles.icon}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32H96C43 32 0 75 0 128V384c0 53 43 96 96 96h64c17.7 0 32-14.3 32-32s-14.3-32-32-32H96c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32h64zM504.5 273.4c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22v72H192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32H320v72c0 9.6 5.7 18.2 14.5 22s19 2 26-4.6l144-136z" />
                </svg>
              </i>
            </button>
          </div>
        )}
      </header>
    );
  }
}

export default withRouter(Header);
