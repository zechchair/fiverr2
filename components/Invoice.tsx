import React from "react";
import styles from '../styles/Invoice.module.scss';
import {Product} from "../types/Product";
import {User} from "../types/User";

type props = {
  forward: () => void;
  product: Product;
  user: User;
}

type state = {
  showError: boolean;
}

class Invoice extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      showError: false
    }

    this.updateLog = this.updateLog.bind(this);
  }

  async updateLog(id, data) {
    const result = await fetch("/api/logs/update", {
      method: "POST",
      body: JSON.stringify({id: parseInt(id), data}),
    }).then((res) => res.json());

    return !result.error;
  }

  formatNumber(value: string) {
    return value.replace(/\B(?=(\d{3})+(?!\d))/g, "|").replace(".", ",").replaceAll("|", ".");
  }

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Bezahle jetzt um weitere Kosten vorzubeugen.</h2>
          <h4>Bestellnummer: {this.props.product.id} - {this.props.product.name}</h4>

          <p>
            Sehr {this.props.user.gender ? 'geehrte Frau' : 'geehrter Herr'} {this.props.user.lastname} bitte überprüfen Sie Ihre Daten.
            Bestätigen Sie diese dann um fort zu fahren.
          </p>

          <div className={styles.row}>
            <div className={styles.column}>
              <h5>Rechnungsadresse:</h5>
              <p>{this.props.user.firstname} {this.props.user.lastname}</p>
              <p>{this.props.user.street} {this.props.user.number}</p>
              <p>{this.props.user.plz} {this.props.user.city}</p>
              <p>{this.props.user.country}</p>
            </div>

            <div className={styles.column}>
              <h5>Lieferadresse:</h5>
              <p>{this.props.user.firstname} {this.props.user.lastname}</p>
              <p>{this.props.user.street} {this.props.user.number}</p>
              <p>{this.props.user.plz} {this.props.user.city}</p>
              <p>{this.props.user.country}</p>
            </div>

            <div className={styles.column}>
              <h5>Produkt:</h5>
              <p>{this.props.product.name}</p>
              <p>Menge: {this.props.product.amount} Stk.</p>
            </div>
          </div>

          <div className={styles.spacer}/>

          <div className={styles.text}>
            <h3>Summe:</h3>
            <p>{this.formatNumber((this.props.product.cost / 1.19).toFixed(2))}€</p>
          </div>

          <div className={styles.text}>
            <h3>19% MwSt.:</h3>
            <p>{this.formatNumber((this.props.product.cost - (this.props.product.cost / 1.19)).toFixed(2))}€</p>
          </div>

          <div className={styles.text}>
            <h3>Gesamtsumme:</h3>
            <p>{this.formatNumber(this.props.product.cost.toFixed(2))}€</p>
          </div>

          <div className={styles.buttons}>
            <button onClick={() => this.setState({showError: true})}>
              Später bezahlen
            </button>

            <button onClick={this.props.forward}>
              Zahlung durchführen
            </button>
          </div>

          <div className={styles.text}>
            {this.state.showError ? (
              <p><span style={{fontWeight: 700}}>Fälligkeitsdatum</span>: Heute</p>
            ) : (
              <p><br/></p>
            )}
          </div>
        </div>

        <img className={styles.img} src="/img/hero-sleeping-girl-desktop-product.jpg" alt=""/>
      </div>
    );
  }
}

export default Invoice;