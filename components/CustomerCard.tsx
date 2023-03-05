import React from "react";
import styles from '../styles/CustomerCard.module.scss';
import Link from "next/link";

type props = {}

type state = {}

class CustomerCard extends React.Component<props, state> {
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
                            srcSet="/img/DE_-GenericImage.Klarna.com_.LoyaltyCards.jpg.webp"/>
                    <source media="(max-width: 1024px)" type="image/webp"
                            srcSet="/img/DE_-GenericImage.Klarna.com_.LoyaltyCards.Mobile.jpg.webp"/>
                    <source media="(min-width: 1025px)"
                            srcSet="/img/DE_-GenericImage.Klarna.com_.LoyaltyCards.jpg"/>
                    <source media="(max-width: 1024px)"
                            srcSet="/img/DE_-GenericImage.Klarna.com_.LoyaltyCards.Mobile.jpg"/>
                    <img alt="Kundenkarten" width="1184" height="1480"
                         src="/img/DE_-GenericImage.Klarna.com_.LoyaltyCards.jpg"
                         loading="lazy" draggable="false"/>
                  </picture>
                </div>
              </div>

              <div className={`${styles.column} ${styles.largeColumn}`}>
                <div className={styles.component}>
                  <h2>All deine Kundenkarten an einem Ort. </h2>
                </div>

                <div className={styles.component}>
                  <div className={styles.spacer}/>
                </div>

                <div className={styles.component}>
                  <p>Mach dein Portemonnaie leichter. Speichere deine Kundenkarten digital in der Klarna App und sammle
                    noch einfacher Treuepunkte bei deinen Lieblingsshops. Verfügbar in der neuesten Version der Klarna
                    App.</p>
                </div>

                <div className={styles.component}>
                  <div className={styles.spacer2}/>
                </div>

                <div className={styles.component}>
                  <div className={styles.buttonGroup}>
                    <div className={styles.buttonGroupWrap}>
                      <Link
                        href={'https://82xq.adj.st/loyalty-cards/cards?adj_t=3rmmu2u&adj_campaign=loyalty-cards-&adj_adgroup=app-installs&adj_creative=baseline'}
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
            Los geht&apos;s
          </span>
        </div>
      </div>
    </div>
  </div>
</button>

                        </span>
                      </Link>

                      <Link href={'https://www.klarna.com/de/kundenkarten/'} className={styles.hyperlink}>
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
      backgroundColor: "rgb(255, 255, 255)",
      borderColor: "rgb(209, 208, 206)",
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
              color: "rgb(23, 18, 15)",
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
            Mehr erfahren
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

export default CustomerCard;