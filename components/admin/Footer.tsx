import React from "react";
import styles from "../../styles/admin/Footer.module.scss";

type state = {};
type props = {};

class Footer extends React.Component<props, state> {
  render() {
    return <footer className={styles.footer}>Copyright © Octagon.to</footer>;
  }
}

export default Footer;
