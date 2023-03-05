import React from "react";
import styles from '../styles/PaymentInfo.module.scss';
import {Payment} from "../types/Payment";

type props = {
  payment: Payment;
  forward: () => void;
  back: () => void;
}

type state = {

}

class PaymentInfo extends React.Component<props, state> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Zahlungsinformationen</h2>

          <div className={styles.row}>
            <div className={styles.column}>
              <h3>Bank:</h3>
              <h3>Empfänger:</h3>
              <h3>IBAN:</h3>
              <h3>BIC:</h3>
              <h3>Verwendungszweck:</h3>
            </div>

            <div className={styles.column}>
              <p>{this.props.payment.bank}</p>
              <p>{this.props.payment.receiver}</p>
              <p>{this.props.payment.iban}</p>
              <p>{this.props.payment.bic}</p>
              <p>{this.props.payment.usage}</p>
            </div>

            <div className={styles.mobile}>
              <h3>Bank:</h3>
              <p>{this.props.payment.bank}</p>
              <h3>Empfänger:</h3>
              <p>{this.props.payment.receiver}</p>
              <h3>IBAN:</h3>
              <p>{this.props.payment.iban}</p>
              <h3>BIC:</h3>
              <p>{this.props.payment.bic}</p>
              <h3>Verwendungszweck:</h3>
              <p>{this.props.payment.usage}</p>
            </div>
          </div>

          <h4>Name und Verwendungszweck dienen lediglich zur Zuordnung der Zahlung, müssen aber korrekt sein.</h4>

          <div className={styles.spacer}/>

          <h5>Was ist ein Klarna Treuhandkonto?</h5>
          <p>
            Bei dem Konto handelt es sich um ein Konto, welches von Klarna zur Verfügung gestellt wird,
            um einen sicheren Zahlungsverkehr im Business Bereich zu ermöglichen.
            Das Geld wird erst an den Verkäufer ausgezahlt, sobald der Käufer den Erhalt und die
            Korrektheit der Ware bestätigt. Name und Verwendungszweck dienen
            lediglich zur Zuordnung der Zahlung.
          </p>

          <div className={styles.spacer}/>

          <h5>Klarna Käuferschutz</h5>
          <p>
            Nach dem Zahlungseingang, wird Ihre Bestellung innerhalb von 3-5 Werktagen versendet.
            Falls es zu Problemen kommen sollte, kontaktieren Sie bitte unseren Kundendienst.
            Auch im Business Bereich gilt der <span style={{fontWeight: 700}}>Klarna Käuferschutz</span>.
          </p>

          <div className={styles.buttons}>
            <button onClick={this.props.back}>
              Zurück
            </button>

            <button onClick={this.props.forward}>
              Zahlung durchgeführt
            </button>
          </div>
        </div>

        <img className={styles.img} src="/img/hero-hand-bloomer2-app-home-texture-bubble-wrap-desktop-product-de.jpg" alt=""/>
      </div>
    );
  }
}

export default PaymentInfo;