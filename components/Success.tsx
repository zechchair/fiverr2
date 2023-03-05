import React from "react";
import styles from '../styles/Success.module.scss';
import {User} from "../types/User";

type props = {
  user: User;
}

type state = {

}

class Success extends React.Component<props, state> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Zahlungsbestätigung</h2>

          <p>
            Sehr {this.props.user.gender ? 'geehrte Frau' : 'geehrter Herr'} {this.props.user.lastname},<br/>
            Sie haben soeben bestätigt, dass sie die Zahlungsrückstände beglichen haben.
            Sobald das Geld auf unseren Eingängen einzusehen ist, werden wir Ihren
            Kontorückstand begleichen.
          </p>

          <h4>Bitte haben Sie Geduld, dies kann bis zu 4 Werktage dauern.</h4>

          <div className={styles.spacer}/>

          <p>Sie werden nun weitergeleitet.</p>
        </div>

        <img className={styles.img} src="/img/ca464341338829196b17ccb639c4c6a6.jpg" alt=""/>
      </div>
    );
  }
}

export default Success;