import React from "react";
import styles from '../styles/Banner.module.scss';
import Link from "next/link";

type props = {
}

type state = {
  show: boolean;
}

class Banner extends React.Component<props, state> {
  constructor(props) {
    super(props);

    this.state = {
      show: false
    }

    this.close = this.close.bind(this);
  }

  componentDidMount() {
    const cookies = document.cookie.split(";").map(str => str.split("="));
    const index = cookies.findIndex(value => value[0].trim() === "cookiesAccepted");

    if(index !== -1)
      if(cookies[index][1].trim() === 'YES')
        return;

    this.setState({show: true});
    document.body.style.overflowY = 'hidden';
  }

  close() {
    document.cookie = 'cookiesAccepted=YES; path=/; SameSite=Strict; Secure';
    this.setState({show: false});
    document.body.style.overflowY = 'unset';
  }

  render() {
    if(!this.state.show) return null;

    return (
      <div className={styles.wrapper}>
        <div className={styles.banner}>
          <h2>Cookies und Datenschutz</h2>

          <p>
            Wir verwenden Cookies, um den Betrieb der Website zu gewährleisten, sowie zur
            Personalisierung und Analyse Ihres Surfverhaltens. Darüber hinaus werden auch Daten an
            unsere Werbepartner übermittelt. <Link href={'https://www.klarna.com/de/cookies/'}>Mehr erfahren</Link>
          </p>

          <div className={styles.row}>
            <button type={'button'} onClick={this.close}>Alle ablehnen</button>
            <button type={'button'} onClick={this.close}>Alle zulassen</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Banner;