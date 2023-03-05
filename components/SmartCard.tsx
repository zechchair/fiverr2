import React from "react";
import styles from '../styles/SmartCard.module.scss';
import Link from "next/link";

type props = {}

type state = {}

class SmartCard extends React.Component<props, state> {
  render() {
    return (
      <div className={styles.container}>
        <section className={styles.section}>
          <div className={styles.spacer}/>

          <div className={styles.siteWidth}>
            <div className={styles.row}>
              <div className={styles.column}>
                <div className={styles.art}>
                  <picture className={styles.image} style={{paddingBottom: "125%", backgroundColor: "transparent"}}>
                    <source media="(min-width: 1025px)" type="image/webp"
                            srcSet="/img/card-photobooth-4x5-1.jpg.webp"/>
                    <source media="(min-width: 1025px)"
                            srcSet="/img/card-photobooth-4x5-1.jpg"/>
                    <img alt="Kundenkarten" width="1440" height="1801"
                         src="/img/card-photobooth-4x5-1.jpg"
                         loading="lazy" draggable="false"/>
                  </picture>
                </div>
              </div>

              <div className={`${styles.column} ${styles.largeColumn}`}>
                <div className={styles.component}>
                  <h2>Setze auf die smarte Karte.</h2>
                </div>

                <div className={styles.component}>
                  <div className={styles.spacer}/>
                </div>

                <div className={styles.component}>
                  <p>Klarna App und Klarna Card gehören zusammen wie Hemd und Kragen, Salz und Wasser, Yin und Yang,... Du verstehst schon. Mit der Klarna Card kannst du nicht nur online, sondern auch in Geschäften mit Klarna bezahlen. Setze auf die smarten Karten und erlebe, was in diesem Power-Paar steckt.</p>
                </div>

                <div className={styles.component}>
                  <div className={styles.spacer2}/>
                </div>

                <div className={styles.component}>
                  <div className={styles.buttonGroup}>
                    <div className={styles.buttonGroupWrap}>
                      <Link
                        href={'https://www.klarna.com/de/card/'}
                        className={styles.hyperlink}>
                        <span className={styles.hyperlinkWrap}>
                          <button
                            style={{
                              padding: 0,
                              margin: 0,
                              backgroundColor: "rgba(255, 255, 255, 0)",
                              border: "none",
                              cursor: "pointer",
                              outline: "none",
                              WebkitTapHighlightColor: "rgba(255, 255, 255, 0)"
                            }}
                          >
  <div
    style={{
      boxSizing: "border-box",
      display: "flex",
      alignItems: "stretch",
      flexDirection: "column",
      flexShrink: 0,
      borderStyle: "solid",
      borderWidth: 1,
      position: "relative",
      zIndex: 0,
      minHeight: 0,
      minWidth: 0,
      backgroundColor: "rgb(23, 18, 15)",
      borderColor: "rgb(23, 18, 15)",
      borderRadius: 0,
      height: 50,
      padding: 4,
      transition: "background-color 0.2s ease 0s, border-color 0.2s ease 0s"
    }}
  >
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "stretch",
        flexDirection: "column",
        flexShrink: 0,
        borderStyle: "solid",
        borderWidth: 0,
        position: "absolute",
        zIndex: 1,
        minHeight: 0,
        minWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderRadius: 0,
        inset: "-1px",
        opacity: 1,
        transition: "background-color 0.2s ease 0s, opacity 0.2s ease 0s"
      }}
    />
    <div
      style={{
        boxSizing: "border-box",
        display: "flex",
        alignItems: "stretch",
        flexDirection: "row",
        flexShrink: 0,
        borderStyle: "solid",
        borderWidth: 0,
        position: "relative",
        zIndex: 2,
        minHeight: 0,
        minWidth: 0,
        backgroundColor: "rgba(255, 255, 255, 0)",
        borderRadius: 0,
        justifyContent: "center",
        padding: "15px 20px",
        transition:
          "background-color 0.2s ease 0s, border-color 0.2s ease 0s, color 0.2s ease 0s"
      }}
    >
      <div
        style={{
          boxSizing: "border-box",
          display: "flex",
          alignItems: "stretch",
          flexDirection: "column",
          flexShrink: 0,
          borderStyle: "solid",
          borderWidth: 0,
          position: "relative",
          zIndex: 0,
          minHeight: 0,
          minWidth: 0,
          backgroundColor: "rgba(0, 0, 0, 0)"
        }}
      >
        <div
          style={{
            boxSizing: "border-box",
            display: "flex",
            alignItems: "stretch",
            flexDirection: "column",
            flexShrink: 0,
            borderStyle: "solid",
            borderWidth: 0,
            position: "relative",
            zIndex: 0,
            minHeight: 0,
            minWidth: 0,
            paddingTop: 0,
            marginTop: "-5px",
            marginBottom: "-6px"
          }}
        >
          <span
            style={{
              maxWidth: "100%",
              color: "rgb(255, 255, 255)",
              fontFamily:
                '"Klarna Text", "Klarna Sans", Helvetica, Arial, sans-serif',
              fontWeight: 500,
              fontSize: 16,
              opacity: 1,
              lineHeight: "20px",
              transition: "color 0.2s ease 0s",
              visibility: "visible",
              WebkitFontSmoothing: "antialiased",
              textSizeAdjust: "none"
            }}
          >
            Mehr zur Klarna Card
          </span>
        </div>
      </div>
    </div>
  </div>
</button>

                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={styles.spacer}/>
        </section>
      </div>
    );
  }
}

export default SmartCard;