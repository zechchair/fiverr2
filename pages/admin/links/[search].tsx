import React from "react";
import Head from "next/head";
import Header from "../../../components/admin/Header";
import Footer from "../../../components/admin/Footer";
import { NextRouter, withRouter } from "next/router";
import { GetServerSideProps } from "next";
import prisma from "../../../prisma/prisma";
import * as PrismaTypes from "@prisma/client";
import Cookies from "cookies";
import { verify, User } from "../../../controller/Auth";
import styles from "../../../styles/admin/Links.module.scss";

export const getServerSideProps: GetServerSideProps = async ({
  req,
  res,
  params,
}) => {
  const searchParam = params?.search;
  if(searchParam === "undefined") return {redirect: {permanent: false, destination: "/admin/links"}};
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

  let where = {};
  if (typeof searchParam === "string")
    where = { url: { contains: searchParam, mode: "insensitive" } };

  const links: PrismaTypes.Link[] = await prisma.link.findMany({
    where,
    orderBy: { id: "asc" },
    include: { logs: true },
  });

  return {
    props: {
      domain: process.env.DOMAIN,
      token: token,
      user: user,
      links: links,
    },
  };
};

type Link = PrismaTypes.Link & {
  logs: PrismaTypes.Log[];
  menuActive?: boolean;
};

type state = {
  search: string;
  links: Link[];
};

type props = {
  router: NextRouter;
  domain: string;
  token: string;
  user: User;
  links: Link[];
};

class Links extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      search: props.router.search,
      links: props.links,
    };

    this.search = this.search.bind(this);
    this.showMenu = this.showMenu.bind(this);
    this.updateLink = this.updateLink.bind(this);
    this.deleteLink = this.deleteLink.bind(this);
  }

  async search(e) {
    e.preventDefault();
    const { search } = this.state;
    window.location.href = `/admin/links/${search}`;
  }

  showMenu(id) {
    const { links } = this.state;
    const link = links.find((link) => link.id === id);

    if (!link.menuActive === true)
      links.forEach((link) => (link.menuActive = false));
    link.menuActive = !link.menuActive;

    this.setState({ links });
  }

  async updateLink(id, data) {
    const { router, token } = this.props;
    const result = await fetch("/api/links/update", {
      method: "POST",
      body: JSON.stringify({ token, id, data }),
    }).then((res) => res.json());

    if (result?.error) return alert(result.error);

    await router.reload();
  }

  async deleteLink(id) {
    const { router, token } = this.props;
    const result = await fetch("/api/links/delete", {
      method: "POST",
      body: JSON.stringify({ token, id }),
    }).then((res) => res.json());

    if (result?.error) return alert(result.error);

    await router.reload();
  }

  render() {
    const links = this.state.links.map((link, index) => {
      const started = link.logs.filter(log => log.state > 0).length;

      return (
        <div
          key={index}
          className={`${styles.tableRow} ${
            link?.menuActive ? styles.active : ""
          }`}
        >
          <div className={styles.id}>{index + 1}</div>
          <div className={styles.mode}>{link.single ? "Single-Spam" : "Multi-Spam"}</div>
          <div className={styles.url}>{this.props.domain}{link.url}</div>
          <div className={styles.description}>{link.description}</div>
          <div className={styles.views}>{link.views}</div>
          <div
            className={styles.menuSwitch}
            onClick={() => this.showMenu(link.id)}
          >
            <i className={styles.icon}>
              {link?.menuActive ? (
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
            <div className={styles.data}>
              <span>Stats</span>

              <div className={styles.wrapper}>
                <span className={styles.name}>Aufrufe:</span>
                <span className={styles.value}>{link.views}</span>
              </div>

              <div className={styles.wrapper}>
                <span className={styles.name}>Abgeschlossen:</span>
                <span className={styles.value}>{link.finishes}</span>
              </div>

              <div className={styles.wrapper}>
                <span className={styles.name}>Teil-Abgeschlossen:</span>
                <span className={styles.value}>{started}</span>
              </div>

              <div className={styles.wrapper}>
                <span className={styles.name}>Filter:</span>
                <span className={styles.value}>{link.filtered}</span>
              </div>

              <div className={styles.wrapper}>
                <span className={styles.name}>Modus:</span>
                <span className={styles.value}>{link.single ? "singleSpam" : "multiSpam"}</span>
              </div>

              <div className={styles.wrapper}>
                <span className={styles.name}>Beschreibung:</span>
                <span className={styles.value}>{link.description}</span>
              </div>
            </div>

            <div className={styles.interactions}>
              <span>Interaktionen</span>

              <button
                onClick={() =>
                  this.updateLink(link.id, { active: !link.active })
                }
              >
                <i className={styles.icon}>
                  {link.active ? (
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
                  {link.active ? "Link deaktivieren" : "Link aktivieren"}
                </span>
              </button>

              <button
                onClick={() =>
                  navigator.clipboard.writeText(
                    `${this.props.domain}${link.url}`
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

              <a
                href={`data:text/json;charset=utf-8,${encodeURIComponent(
                  JSON.stringify(link, null, 2)
                )}`}
                download={`link-${link.id}-${new Date().toISOString()}.json`}
              >
                <i className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17.996 17.996"
                  >
                    <path d="M13.5,3.374V0H9.56A1.687,1.687,0,0,0,7.873,1.687V11.81A1.687,1.687,0,0,0,9.56,13.5h6.749A1.687,1.687,0,0,0,18,11.81V4.5H14.654A1.135,1.135,0,0,1,13.5,3.374ZM14.622,0V3.374H18ZM6.749,12.372V4.5H1.687A1.687,1.687,0,0,0,0,6.186V16.309A1.687,1.687,0,0,0,1.687,18H8.436a1.687,1.687,0,0,0,1.687-1.687V14.622H9A2.252,2.252,0,0,1,6.749,12.372Z" />
                  </svg>
                </i>
                <span>Herunterladen</span>
              </a>

              <button onClick={() => this.deleteLink(link.id)}>
                <i className={styles.icon}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 17.996 17.996"
                  >
                    <path d="M18,9A9,9,0,1,1,9,0,9,9,0,0,1,18,9ZM3.5,5.09A6.748,6.748,0,0,0,12.907,14.5ZM15.747,9A6.748,6.748,0,0,0,5.09,3.5L14.5,12.907A6.691,6.691,0,0,0,15.747,9Z" />
                  </svg>
                </i>
                <span>Löschen</span>
              </button>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div>
        <Head>
          <title>Admin Panel | Links</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header user={this.props.user} />

        <main className={styles.content}>
          <div className={styles.links}>
            <div className={styles.header}>
              <h1 className={styles.title}>Links</h1>

              <form className={styles.searchContainer} onSubmit={this.search}>
                <label htmlFor="search">Suche</label>
                <input
                  id="search"
                  type="search"
                  placeholder="Suchbegriff hier eingeben..."
                  value={this.state.search}
                  onChange={(e) => this.setState({ search: e.target.value })}
                />
              </form>
            </div>

            <div className={styles.table}>
              <header className={styles.tableRow}>
                <div className={styles.id}>ID</div>
                <div className={styles.mode}>Modus</div>
                <div className={styles.url}>Url</div>
                <div className={styles.description}>Beschreibung</div>
                <div className={styles.views}>Aufrufe</div>
                <div className={styles.menuSwitch}></div>
              </header>

              {links}
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default withRouter(Links);
