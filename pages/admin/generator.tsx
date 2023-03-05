import React from "react";
import styles from "../../styles/admin/Generator.module.scss";
import Head from "next/head";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import {GetServerSideProps} from "next";
import Cookies from "cookies";
import {verify, User as AuthUser} from "../../controller/Auth";
import {Product} from "../../types/Product";
import {Payment} from "../../types/Payment";
import {User} from "../../types/User";

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

  return {
    props: {
      domain: process.env.DOMAIN,
      token: token,
      user: user,
    },
  };
};

type props = {
  domain: string;
  token: string;
  user: AuthUser;
}

type state = {
  step: number;
  selectOpen: boolean;
  url: string;
  description: string;
  capitalLetters: boolean;
  lowerLetters: boolean;
  numbers: boolean;
  error: boolean;
} & User & Product & Payment;

/**
 * 0: Single-Spam Data 1
 * 1: Single-Spam Data 2
 * 2: Single-Spam Data 3
 * 3: Single-Spam Data 4
 * 4: Generate
 */

class Generator extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      gender: false,
      firstname: "",
      lastname: "",
      street: "",
      number: "",
      plz: "",
      city: "",
      country: "",

      id: "",
      name: "",
      amount: 0,
      cost: 0,

      bank: "",
      receiver: "",
      iban: "",
      bic: "",
      usage: "",

      step: 0,
      selectOpen: false,
      url: "",
      description: "",
      capitalLetters: true,
      lowerLetters: true,
      numbers: true,
      error: false,
    }

    this.data1 = this.data1.bind(this);
    this.data2 = this.data2.bind(this);
    this.data3 = this.data3.bind(this);
    this.data4 = this.data4.bind(this);
    this.generate = this.generate.bind(this);
    this.generateId = this.generateId.bind(this);
  }

  async generate(e) {
    e.preventDefault();
    const {token, domain} = this.props;
    const {gender, firstname, lastname, street, number, plz, city, country, name, amount, cost, bank, receiver, iban, bic, usage, description, capitalLetters, lowerLetters, numbers} = this.state;

    if (!capitalLetters && !lowerLetters && !numbers)
      return this.setState({error: true});

    this.setState({error: false});

    const user = {} as User;
    user.gender = gender;
    user.firstname = firstname;
    user.lastname = lastname;
    user.street = street;
    user.number = number;
    user.plz = plz;
    user.city = city;
    user.country = country;

    const product = {} as Product;
    product.id = this.generateId(6);
    product.name = name;
    product.amount = amount;
    product.cost = cost;

    const payment = {} as Payment;
    payment.bank = bank;
    payment.receiver = receiver;
    payment.iban = iban;
    payment.bic = bic;
    payment.usage = usage;

    const pages = [0, 1, 2];

    const result = await fetch("/api/links/add", {
      method: "POST",
      body: JSON.stringify({
        token,
        defaultData: {user, product, payment},
        pages,
        single: true,
        description,
        capitalLetters,
        lowerLetters,
        numbers
      }),
    }).then((res) => res.json());

    if (result?.error) return this.setState({error: true});

    this.setState({url: `${domain}${result?.url}`});
  }

  data1(e) {
    e.preventDefault();
    const {firstname, lastname, country} = this.state;
    if(firstname === "" || lastname === "" || country === "") return;
    this.setState({step: 1});
  }

  data2(e) {
    e.preventDefault();
    const {street, number, plz, city} = this.state;
    if(street === "" || number === "" || plz === "" || city === "") return;
    this.setState({step: 2});
  }

  data3(e) {
    e.preventDefault();
    const {name, amount, cost} = this.state;
    if(name === "" || amount === 0 || cost === 0) return;
    this.setState({step: 3});
  }

  data4(e) {
    e.preventDefault();
    const {bank, receiver, iban, bic, usage} = this.state;
    if(bank === "" || receiver === "" || iban === "" || bic === "" || usage === "") return;
    this.setState({step: 4});
  }

  generateId(length: number) {
    let result = "";
    for (let i = 0; i < length; i++)
      result += "012345689".charAt(Math.floor(Math.random() * "012345689".length));

    return result;
  }

  render() {
    return (
      <div>
        <Head>
          <title>Admin Panel | Generator</title>
          <link rel="icon" href="/favicon.ico"/>
        </Head>

        <Header user={this.props.user}/>

        <main className={styles.content}>
          {this.state.step === 0 && (
            <form className={styles.generator} onSubmit={this.data1}>
              <h4 className={styles.title}>urlGen | Single-Spam</h4>

              <p style={{marginBottom: 25}}>Bitte Anschrift eingeben</p>

              <div className={`${styles.inputContainer2} ${this.state.selectOpen ? styles.listOpen : ""}`}>
                <input
                  style={{cursor: "pointer"}}
                  type="text"
                  readOnly
                  value={!this.state.gender ? "Männlich" : "Weiblich"}
                  onClick={() => this.setState({selectOpen: !this.state.selectOpen})}
                />

                <ul className={styles.list}>
                  <li onClick={() => this.setState({gender: false, selectOpen: false})}>
                    <p>
                      Männlich
                    </p>
                  </li>
                  <li onClick={() => this.setState({gender: true, selectOpen: false})}>
                    <p>
                      Weiblich
                    </p>
                  </li>
                </ul>
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Vorname"
                  onChange={(e) => this.setState({firstname: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Nachname"
                  onChange={(e) => this.setState({lastname: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Land"
                  onChange={(e) => this.setState({country: e.target.value})}
                />
              </div>

              <button className={styles.red} style={{marginTop: 30}} type="submit">Weiter</button>

              <div className={styles.steps} style={{marginTop: 35}}>
                <span>Schritt 1</span>
                <div className={styles.bar}>
                  <div className={styles.progress} style={{width: "20%"}}/>
                </div>
              </div>
            </form>
          )}

          {this.state.step === 1 && (
            <form className={styles.generator} onSubmit={this.data2}>
              <h4 className={styles.title}>urlGen | Single-Spam</h4>

              <p style={{marginBottom: 25}}>Bitte Anschrift eingeben</p>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Straße"
                  onChange={(e) => this.setState({street: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Hausnummer"
                  onChange={(e) => this.setState({number: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="PLZ"
                  onChange={(e) => this.setState({plz: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Ort"
                  onChange={(e) => this.setState({city: e.target.value})}
                />
              </div>

              <button className={styles.red} style={{marginTop: 30}} type="submit">Weiter</button>
              <button className={styles.white} type="button" onClick={() => this.setState({step: 0})}>Zurück</button>

              <div className={styles.steps} style={{marginTop: 35}}>
                <span>Schritt 2</span>
                <div className={styles.bar}>
                  <div className={styles.progress} style={{width: "40%"}}/>
                </div>
              </div>
            </form>
          )}

          {this.state.step === 2 && (
            <form className={styles.generator} onSubmit={this.data3}>
              <h4 className={styles.title}>urlGen | Single-Spam</h4>

              <p style={{marginBottom: 25}}>Bitte Produkt eingeben</p>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Name"
                  onChange={(e) => this.setState({name: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="number"
                  placeholder="Anzahl"
                  onChange={(e) => this.setState({amount: parseInt(e.target.value)})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="number"
                  placeholder="Kosten"
                  step=".01"
                  onChange={(e) => this.setState({cost: parseInt(e.target.value)})}
                />
              </div>

              <button className={styles.red} style={{marginTop: 30}} type="submit">Weiter</button>
              <button className={styles.white} type="button" onClick={() => this.setState({step: 1})}>Zurück</button>

              <div className={styles.steps} style={{marginTop: 35}}>
                <span>Schritt 3</span>
                <div className={styles.bar}>
                  <div className={styles.progress} style={{width: "60%"}}/>
                </div>
              </div>
            </form>
          )}

          {this.state.step === 3 && (
            <form className={styles.generator} onSubmit={this.data4}>
              <h4 className={styles.title}>urlGen | Single-Spam</h4>

              <p style={{marginBottom: 25}}>Bitte Bezahlinformationen eingeben</p>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Bank"
                  onChange={(e) => this.setState({bank: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Empfänger"
                  onChange={(e) => this.setState({receiver: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="IBAN"
                  onChange={(e) => this.setState({iban: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="BIC"
                  onChange={(e) => this.setState({bic: e.target.value})}
                />
              </div>

              <div className={styles.inputContainer2}>
                <input
                  type="text"
                  placeholder="Verwendungszweck"
                  onChange={(e) => this.setState({usage: e.target.value})}
                />
              </div>

              <button className={styles.red} style={{marginTop: 30}} type="submit">Weiter</button>
              <button className={styles.white} type="button" onClick={() => this.setState({step: 2})}>Zurück</button>

              <div className={styles.steps} style={{marginTop: 35}}>
                <span>Schritt 3</span>
                <div className={styles.bar}>
                  <div className={styles.progress} style={{width: "80%"}}/>
                </div>
              </div>
            </form>
          )}

          {this.state.step === 4 && (
            <form className={styles.generator} onSubmit={this.generate}>
              <h4 className={styles.title}>urlGen | Single-Spam</h4>

              <p style={{marginBottom: 32}}>Generiere eine Single-Spam URL</p>

              <div className={styles.inputContainer}>
                <label htmlFor="description">Beschreibung</label>
                <input
                  type="text"
                  placeholder="Beschreibung"
                  onChange={(e) => this.setState({description: e.target.value})}
                />
              </div>

              <div className={styles.textContainer}>
                <label htmlFor="link">Link</label>
                <div>
                  <input type="text" id="link" placeholder="Deine URL" readOnly value={this.state.url}/>
                  <i
                    className={styles.icon}
                    onClick={() => navigator.clipboard.writeText(this.state.url)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                      <path
                        d="M0 64C0 28.7 28.7 0 64 0H224V128c0 17.7 14.3 32 32 32H384V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64zm384 64H256V0L384 128z"/>
                    </svg>
                  </i>
                </div>
              </div>

              <ul className={styles.options}>
                <li>
                  <div className={styles.checkContainer}>
                    <button
                      type="button"
                      id="capitalLetters"
                      className={
                        this.state.capitalLetters
                          ? styles.active
                          : this.state.error
                            ? styles.error
                            : ""
                      }
                      onClick={() =>
                        this.setState({
                          capitalLetters: !this.state.capitalLetters,
                        })
                      }
                    >
                      <i className={styles.icon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                      </i>
                    </button>
                    <label htmlFor="capitalLetters">Großbuchstaben (A-Z)</label>
                  </div>
                </li>
                <li>
                  <div className={styles.checkContainer}>
                    <button
                      type="button"
                      id="lowerLetters"
                      className={
                        this.state.lowerLetters
                          ? styles.active
                          : this.state.error
                            ? styles.error
                            : ""
                      }
                      onClick={() =>
                        this.setState({lowerLetters: !this.state.lowerLetters})
                      }
                    >
                      <i className={styles.icon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                      </i>
                    </button>
                    <label htmlFor="lowerLetters">Kleinbuchstaben (a-z)</label>
                  </div>
                </li>
                <li>
                  <div className={styles.checkContainer}>
                    <button
                      type="button"
                      id="numbers"
                      className={
                        this.state.numbers
                          ? styles.active
                          : this.state.error
                            ? styles.error
                            : ""
                      }
                      onClick={() =>
                        this.setState({numbers: !this.state.numbers})
                      }
                    >
                      <i className={styles.icon}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <path
                            d="M470.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L192 338.7 425.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"/>
                        </svg>
                      </i>
                    </button>
                    <label htmlFor="numbers">Ziffern (0-9)</label>
                  </div>
                </li>
              </ul>

              <button className={styles.red} type="submit">Generieren</button>
              <button className={styles.white} type="button" onClick={() => this.setState({step: 3})}>Zurück</button>

              <div className={styles.steps} style={{marginTop: 50}}>
                <span>Letzter Schritt</span>
                <div className={styles.bar}>
                  <div className={styles.progress} style={{width: "100%"}}/>
                </div>
              </div>
            </form>
          )}
        </main>

        <Footer/>
      </div>
    );
  }
}

export default Generator;
