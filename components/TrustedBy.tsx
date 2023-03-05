import React from "react";
import styles from '../styles/TrustedBy.module.scss';

type props = {

}

type state = {

}

class TrustedBy extends React.Component<props, state> {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.siteWidth}>
          <div className={styles.header}>
            <div className={styles.row}>
              <div className={styles.column}>
                <h2>Die beliebtesten Marken der Welt vertrauen darauf.</h2>
              </div>
            </div>
          </div>

          <div className={styles.grid}>
            <div className={styles.column}>
              <img src="/img/Macys.png" alt=""/>
            </div>

            <div className={styles.column}>
              <img src="/img/Sachs-5th-avenue.png" alt=""/>
            </div>

            <div className={styles.column}>
              <img src="/img/HM-1.png" alt=""/>
            </div>

            <div className={styles.column}>
              <img src="/img/Sephora.png" alt=""/>
            </div>

            <div className={styles.column}>
              <img src="/img/Adidas.png" alt=""/>
            </div>

            <div className={styles.column}>
              <img src="/img/Group-2193.png" alt=""/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default TrustedBy;