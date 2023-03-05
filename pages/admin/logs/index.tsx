import React from "react";
import Head from "next/head";
import Header from "../../../components/admin/Header";
import Footer from "../../../components/admin/Footer";
import {NextRouter, withRouter} from "next/router";
import {GetServerSideProps} from "next";
import prisma from "../../../prisma/prisma";
import * as PrismaTypes from "@prisma/client";
import Cookies from "cookies";
import {verify, User as AuthUser} from "../../../controller/Auth";
import styles from "../../../styles/admin/Logs.module.scss";
import {Product} from "../../../types/Product";
import {Payment} from "../../../types/Payment";
import {User} from "../../../types/User";

export const getServerSideProps: GetServerSideProps = async ({req, res}) => {
  const cookies = new Cookies(req, res);
  const token = cookies?.get("token") || null;
  const user: AuthUser = await verify(token);

  if (user === null)
    return {
      redirect: {
        permanent: false,
        destination: "/admin/login",
      },
    };

  const logs: PrismaTypes.Log[] = await prisma.log.findMany({
    orderBy: {id: "asc"},
    include: {
      link: true,
    },
  });

  return {
    props: {
      domain: process.env.DOMAIN,
      token: token,
      user: user,
      logs: logs,
    },
  };
};

type Log = PrismaTypes.Log & {
  link: PrismaTypes.Link;
  menuActive?: boolean;
};

type state = {
  search: string;
  logs: Log[];
};

type props = {
  router: NextRouter;
  domain: string;
  token: string;
  user: AuthUser;
  logs: Log[];
};

class Logs extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      logs: props.logs,
    };

    this.search = this.search.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.updateLog = this.updateLog.bind(this);
    this.deleteLog = this.deleteLog.bind(this);
  }

  async search(e) {
    e.preventDefault();
    const {router} = this.props;
    const {search} = this.state;
    await router.push(`/admin/logs/${search}`);
  }

  showMenu(id) {
    const {logs} = this.state;
    const log = logs.find((link) => link.id === id);

    if (!log.menuActive === true)
      logs.forEach((link) => (link.menuActive = false));
    log.menuActive = !log.menuActive;

    this.setState({logs});
  }

  async updateLog(id, data) {
    const {router} = this.props;
    const result = await fetch("/api/logs/update", {
      method: "POST",
      body: JSON.stringify({id, data}),
    }).then((res) => res.json());

    if (result?.error) return alert(result.error);

    await router.reload();
  }

  async deleteLog(id) {
    const {router, token} = this.props;
    const result = await fetch("/api/logs/delete", {
      method: "POST",
      body: JSON.stringify({token, id}),
    }).then((res) => res.json());

    if (result?.error) return alert(result.error);

    await router.reload();
  }

  render() {
    const logs = this.state.logs.filter(log => log.state > 0).map((log, index) => {
      const {user, payment, product}: {user: User, payment: Payment, product: Product} = JSON.parse(log.defaultData);

      return (
        <div
          key={index}
          className={`${styles.tableRow} ${
            log?.menuActive ? styles.active : ""
          }`}
        >
          <div className={styles.id}>{index + 1}</div>
          <div className={styles.firstname}>{user.firstname}</div>
          <div className={styles.lastname}>{user.lastname}</div>
          <div className={styles.done}>
            {log.done && (
              <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"
                fill={'#ffb3c7'}/>
              </svg>
            )}
          </div>
          <div
            className={styles.menuSwitch}
            onClick={() => this.showMenu(log.id)}
          >
            <i className={styles.icon}>
              {log?.menuActive ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 9.756 5.691"
                >
                  <path
                    d="M4.883,165.691a.81.81,0,0,1-.575-.238L.243,161.388a.813.813,0,0,1,1.15-1.15l3.49,3.491,3.491-3.491a.813.813,0,0,1,1.15,1.15l-4.065,4.065A.811.811,0,0,1,4.883,165.691Z"
                    transform="translate(9.761 165.691) rotate(180)"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 9.756 5.691"
                >
                  <path
                    d="M4.883,165.691a.81.81,0,0,1-.575-.238L.243,161.388a.813.813,0,0,1,1.15-1.15l3.49,3.491,3.491-3.491a.813.813,0,0,1,1.15,1.15l-4.065,4.065A.811.811,0,0,1,4.883,165.691Z"
                    transform="translate(-0.005 -160)"
                  />
                </svg>
              )}
            </i>
          </div>

          <div className={styles.menu}>
            <div style={{display: 'flex', width: "100%"}}>
              <div className={styles.data}>
                <span>Persönliche Daten</span>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Vorname:</span>
                  <span className={styles.value}>{user.firstname}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Name:</span>
                  <span className={styles.value}>{user.lastname}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Straße/Hausnummer:</span>
                  <span className={styles.value}>{user.street} {user.number}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>PLZ/Ort:</span>
                  <span className={styles.value}>{user.plz} {user.city}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Land:</span>
                  <span className={styles.value}>
                  {user.country}
                </span>
                </div>
              </div>

              <div className={styles.data}>
                <span>Andere Daten</span>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Bank:</span>
                  <span className={styles.value}>
                  {payment.bank}
                </span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Empfänger:</span>
                  <span className={styles.value}>{payment.receiver}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>IBAN:</span>
                  <span className={styles.value}>{payment.iban}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>BIC:</span>
                  <span className={styles.value}>{payment.bic}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Verwendungszweck:</span>
                  <span className={styles.value}>{payment.usage}</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Produkt Name:</span>
                  <span className={styles.value}>
                  {product.name}
                </span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Produkt Anzahl:</span>
                  <span className={styles.value}>{product.amount} Stk.</span>
                </div>

                <div className={styles.wrapper}>
                  <span className={styles.name}>Produkt Kosten:</span>
                  <span className={styles.value}>{product.cost.toFixed(2)} €</span>
                </div>
              </div>

              <div className={styles.interactions}>
                <span>Interaktionen</span>

                {log.link?.url && (
                  <button
                    onClick={() =>
                      this.updateLog(log.id, {active: !log.active})
                    }
                  >
                    <i className={styles.icon}>
                      {log.active ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 14.962 17.996"
                        >
                          <path
                            d="M12.717,63.1h-1.5a2.236,2.236,0,0,0-2.244,2.2V78.768a2.244,2.244,0,0,0,2.244,2.244l1.5.084a2.244,2.244,0,0,0,2.244-2.244V65.386A2.281,2.281,0,0,0,12.717,63.1Zm-8.977,0h-1.5A2.244,2.244,0,0,0,0,65.344V78.81A2.254,2.254,0,0,0,2.244,81.1h1.5a2.244,2.244,0,0,0,2.244-2.244V65.386A2.281,2.281,0,0,0,3.74,63.1Z"
                            transform="translate(0 -63.1)"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 15.428 17.996"
                        >
                          <path
                            d="M14.5,39.351A1.935,1.935,0,0,1,15.428,41,1.832,1.832,0,0,1,14.5,42.61L2.934,49.681a1.854,1.854,0,0,1-1.949.072A1.929,1.929,0,0,1,0,48.07V33.928a1.928,1.928,0,0,1,2.934-1.646Z"
                            transform="translate(0 -31.999)"
                          />
                        </svg>
                      )}
                    </i>
                    <span>
                    {log.active ? "Link deaktivieren" : "Link aktivieren"}
                  </span>
                  </button>
                )}

                {log.link?.url && (
                  <button
                    onClick={() =>
                      navigator.clipboard.writeText(
                        `${this.props.domain}${log.link?.url}`
                      )
                    }
                  >
                    <i className={styles.icon}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 23.127 17.996"
                      >
                        <path
                          d="M23.776,25.1a5.547,5.547,0,0,1,8.416,7.164l-.042.061A1.225,1.225,0,0,1,30.156,30.9l.042-.061a3.086,3.086,0,0,0-4.692-3.976l-4.294,4.3a3.084,3.084,0,0,0,3.972,4.692l.061-.077a1.26,1.26,0,0,1,1.707.318A1.226,1.226,0,0,1,26.67,37.8l-.061.042a5.534,5.534,0,0,1-7.129-8.416Zm11.29,9.525a5.534,5.534,0,0,1-8.416-7.13l.042-.061a1.225,1.225,0,0,1,1.994,1.424l-.042.061a3.086,3.086,0,0,0,4.692,3.976l4.294-4.3A3.084,3.084,0,0,0,33.658,23.9l-.061.042a1.252,1.252,0,0,1-1.707-.284,1.223,1.223,0,0,1,.283-1.708l.061-.043a5.533,5.533,0,0,1,7.13,8.415Z"
                          transform="translate(-17.858 -20.881)"
                        />
                      </svg>
                      <span>Link kopieren</span>
                    </i>
                  </button>
                )}

                <button onClick={() => this.deleteLog(log.id)}>
                  <i className={styles.icon}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 17.996 17.996"
                    >
                      <path
                        d="M18,9A9,9,0,1,1,9,0,9,9,0,0,1,18,9ZM3.5,5.09A6.748,6.748,0,0,0,12.907,14.5ZM15.747,9A6.748,6.748,0,0,0,5.09,3.5L14.5,12.907A6.691,6.691,0,0,0,15.747,9Z"/>
                    </svg>
                  </i>
                  <span>Löschen</span>
                </button>
              </div>
            </div>

            <div className={styles.bottomRow}>
              <div className={styles.smsLink}/>

              <div className={styles.ip}>
                <span>IP</span>

                <div>
                  <p>{log.ip || ""}</p>
                  <i
                    className={styles.icon}
                    onClick={() => navigator.clipboard.writeText(log.ip)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path
                        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
                    </svg>
                  </i>
                </div>
              </div>

              <div className={styles.userAgent}>
                <span>User Agent</span>

                <div>
                  <p>{log.userAgent || ""}</p>
                  <i
                    className={styles.icon}
                    onClick={() => navigator.clipboard.writeText(log.userAgent)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path
                        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
                    </svg>
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Head>
          <title>Admin Panel | Logs</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Header user={this.props.user}/>

        <main className={styles.content}>
          <div className={styles.logs}>
            <div className={styles.header}>
              <h1 className={styles.title}>Logs</h1>

              <form className={styles.searchContainer} onSubmit={this.search}>
                <label htmlFor="search">Suche</label>
                <input
                  id="search"
                  type="search"
                  placeholder="Suchbegriff hier eingeben..."
                  value={this.state.search}
                  onChange={(e) => this.setState({search: e.target.value})}
                />
              </form>
            </div>

            <div className={styles.table}>
              <header className={styles.tableRow}>
                <div className={styles.id}>ID</div>
                <div className={styles.firstname}>Vorname</div>
                <div className={styles.lastname}>Nachname</div>
                <div className={styles.done}>Fertig</div>
                <div className={styles.menuSwitch}></div>
              </header>

              {logs}
            </div>
          </div>
        </main>

        <Footer/>
      </div>
    );
  }
}

export default withRouter(Logs);
