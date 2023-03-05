import React from "react";
import styles from "../styles/Footer.module.scss";
import Link from "next/link";

type FooterProps = {};

type FooterState = {
  businessOpen: boolean;
  privatOpen: boolean;
  klarnaOpen: boolean;
};

class Footer extends React.Component<FooterProps, FooterState> {
  constructor(props) {
    super(props);

    this.state = {
      businessOpen: false,
      privatOpen: false,
      klarnaOpen: false
    }
  }

  render() {
    const {businessOpen, privatOpen, klarnaOpen} = this.state;

    return (
      <footer className={styles.footer}>
        <div className={styles.siteWidth}>
          <div className={styles.top}>
            <div className={styles.left}>
              <Link href={'https://klarna.com/'} className={styles.hyperlink}>
                <div className={styles.hyperlinkWrap}>
                  <div className={styles.logo}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="184.378" height="18" viewBox="0 0 184.378 18">
                      <g transform="translate(0 -1)">
                        <path d="M14.19,1H10.222a10.142,10.142,0,0,1-4.1,8.188L4.55,10.364l6.083,8.3h5.01l-5.6-7.641A14.042,14.042,0,0,0,14.19,1Z" fill="#fff"/>
                        <path d="M0,18.664H4.065V1H0Z" fill="#fff"/>
                        <path d="M16.824,18.658h3.828V1H16.824Z" fill="#fff"/>
                        <path d="M54.227,6.119a4.463,4.463,0,0,0-3.763,1.689V6.445H46.822V18.658h3.685V12.239A2.574,2.574,0,0,1,53.25,9.471c1.608,0,2.532.961,2.532,2.74v6.447h3.651V10.886c0-2.842-2.261-4.774-5.206-4.774Z" fill="#fff"/>
                        <path d="M28.894,15.694a3.232,3.232,0,0,1-3.312-3.141,3.317,3.317,0,0,1,6.624,0A3.226,3.226,0,0,1,28.894,15.694Zm3.325-9.246v.781a6.436,6.436,0,1,0,0,10.67v.781h3.66V6.449Z" fill="#fff"/>
                        <path d="M41.532,8.038V6.445H37.788V18.658h3.75v-5.7c0-1.925,2.084-2.961,3.533-2.961h.04V6.448A4.557,4.557,0,0,0,41.532,8.038Z" fill="#fff"/>
                        <path d="M67.469,15.694a3.232,3.232,0,0,1-3.312-3.141,3.317,3.317,0,0,1,6.624,0A3.224,3.224,0,0,1,67.469,15.694ZM70.8,6.449v.781a6.444,6.444,0,1,0,0,10.651v.781h3.657V6.449Z" fill="#fff"/>
                        <path d="M78.335,14.326a2.3,2.3,0,1,0,2.3,2.3v0a2.3,2.3,0,0,0-2.292-2.3Z" fill="#fff"/>
                        <path d="M88.062,8.293v3.489h5.427v1.85H88.062v5.025H85.951V6.445h8.39V8.3H88.062Z" fill="#fff"/>
                        <path d="M97.258,18.238a4.105,4.105,0,0,1-1.58-1.6,5.011,5.011,0,0,1-.585-2.479,5.02,5.02,0,0,1,.585-2.479,4.064,4.064,0,0,1,1.58-1.6,4.7,4.7,0,0,1,4.45,0,4.042,4.042,0,0,1,1.571,1.6,5.082,5.082,0,0,1,.575,2.479,5.091,5.091,0,0,1-.575,2.479,4.023,4.023,0,0,1-1.571,1.6,4.725,4.725,0,0,1-4.45,0Zm3.925-1.909a3.149,3.149,0,0,0,.681-2.171,3.138,3.138,0,0,0-.681-2.171,2.307,2.307,0,0,0-3.421,0,3.148,3.148,0,0,0-.681,2.171,3.138,3.138,0,0,0,.681,2.171,2.307,2.307,0,0,0,3.421,0Z" fill="#fff"/>
                        <path d="M109.436,11.188a1.983,1.983,0,0,0-1.5.647,2.337,2.337,0,0,0-.609,1.676v5.147h-1.987v-9h1.9V10.98a2.377,2.377,0,0,1,.976-1.073,3,3,0,0,1,1.552-.392,3.4,3.4,0,0,1,.874.121v1.779A3.057,3.057,0,0,0,109.436,11.188Z" fill="#fff"/>
                        <path d="M115.976,6.445h4.8a4.346,4.346,0,0,1,2.852.836,2.862,2.862,0,0,1,1,2.32,2.675,2.675,0,0,1-.445,1.542,2.835,2.835,0,0,1-1.141.986,3.222,3.222,0,0,1,1.483,1.029A3.006,3.006,0,0,1,125.1,15.1a3.3,3.3,0,0,1-1.981,3.15,4.716,4.716,0,0,1-1.981.41h-5.166Zm4.78,4.954a2.147,2.147,0,0,0,1.387-.392,1.405,1.405,0,0,0,.479-1.16,1.432,1.432,0,0,0-.479-1.169,2.111,2.111,0,0,0-1.387-.4h-2.668V11.4Zm.072,5.427a2.458,2.458,0,0,0,1.623-.47,1.741,1.741,0,0,0,.56-1.412,1.763,1.763,0,0,0-.566-1.368,2.33,2.33,0,0,0-1.614-.513h-2.74v3.769h2.737Z" fill="#fff"/>
                        <path d="M127.4,17.924a3.454,3.454,0,0,1-.874-2.547V9.655h1.991v5.461a2.038,2.038,0,0,0,.507,1.483,1.9,1.9,0,0,0,1.43.522,2.005,2.005,0,0,0,1.474-.6,2.156,2.156,0,0,0,.6-1.6V9.655h1.991v9h-1.9V17.193a2.71,2.71,0,0,1-1.117,1.16,3.568,3.568,0,0,1-1.813.445A3.106,3.106,0,0,1,127.4,17.924Z" fill="#fff"/>
                        <path d="M137,18a2.777,2.777,0,0,1-1.029-2.084l2.024-.14a1.439,1.439,0,0,0,.516,1,1.869,1.869,0,0,0,1.229.367,2.057,2.057,0,0,0,1.188-.3,1,1,0,0,0,.42-.874.868.868,0,0,0-.367-.74,2.638,2.638,0,0,0-1.136-.392l-1.187-.174a3.112,3.112,0,0,1-1.807-.812,2.292,2.292,0,0,1-.638-1.7,2.308,2.308,0,0,1,.924-1.91,3.916,3.916,0,0,1,2.478-.725,4.3,4.3,0,0,1,2.522.638,2.324,2.324,0,0,1,.968,1.875l-1.832.174a1.381,1.381,0,0,0-.541-.837,1.933,1.933,0,0,0-1.117-.28,2.088,2.088,0,0,0-1.116.261.806.806,0,0,0-.42.715c0,.56.435.9,1.309,1.029l1.185.174a3.971,3.971,0,0,1,2.04.821,2.274,2.274,0,0,1,.7,1.813,2.582,2.582,0,0,1-.961,2.121,4.051,4.051,0,0,1-2.615.778A4.213,4.213,0,0,1,137,18Z" fill="#fff"/>
                        <path d="M145.079,7.876a1.351,1.351,0,0,1-.4-1,1.321,1.321,0,0,1,.4-.986,1.459,1.459,0,0,1,1.99,0,1.324,1.324,0,0,1,.4.986,1.371,1.371,0,0,1-.392,1,1.446,1.446,0,0,1-2,0Zm0,1.779h1.987v9h-1.987Z" fill="#fff"/>
                        <path d="M149.265,9.655h1.9V11.12a2.7,2.7,0,0,1,1.116-1.16,3.574,3.574,0,0,1,1.816-.445,3.084,3.084,0,0,1,2.295.874,3.471,3.471,0,0,1,.865,2.547v5.722h-1.99V13.2a2.039,2.039,0,0,0-.507-1.483,1.9,1.9,0,0,0-1.431-.522,2.006,2.006,0,0,0-1.474.6,2.158,2.158,0,0,0-.6,1.6v5.268h-1.987Z" fill="#fff"/>
                        <path d="M167.2,14.54h-6.437a2.916,2.916,0,0,0,.724,1.894,2.181,2.181,0,0,0,1.633.653,2.3,2.3,0,0,0,1.256-.333,1.835,1.835,0,0,0,.75-.924l1.884.348a3.32,3.32,0,0,1-1.377,1.928,4.412,4.412,0,0,1-2.513.69,4.5,4.5,0,0,1-2.233-.557,3.941,3.941,0,0,1-1.561-1.6,5.1,5.1,0,0,1-.566-2.478,5.041,5.041,0,0,1,.584-2.469,4.054,4.054,0,0,1,1.58-1.614,4.444,4.444,0,0,1,2.218-.56,3.98,3.98,0,0,1,2.966,1.117,4.2,4.2,0,0,1,1.1,3.088v.821Zm-1.972-1.449a2.21,2.21,0,0,0-.69-1.44,2.074,2.074,0,0,0-1.421-.5,2.232,2.232,0,0,0-1.456.488,2.473,2.473,0,0,0-.811,1.449Z" fill="#fff"/>
                        <path d="M169.519,18a2.776,2.776,0,0,1-1.029-2.084l2.024-.14a1.436,1.436,0,0,0,.517,1,1.864,1.864,0,0,0,1.228.367,2.057,2.057,0,0,0,1.188-.3,1,1,0,0,0,.42-.874.868.868,0,0,0-.367-.74,2.638,2.638,0,0,0-1.135-.392l-1.188-.174a3.112,3.112,0,0,1-1.807-.812,2.292,2.292,0,0,1-.638-1.7,2.307,2.307,0,0,1,.924-1.91,3.918,3.918,0,0,1,2.479-.725,4.3,4.3,0,0,1,2.522.638,2.325,2.325,0,0,1,.967,1.875l-1.832.174a1.381,1.381,0,0,0-.541-.837,1.93,1.93,0,0,0-1.116-.28,2.09,2.09,0,0,0-1.117.261.806.806,0,0,0-.42.715q0,.84,1.31,1.029l1.184.174a3.971,3.971,0,0,1,2.04.821,2.274,2.274,0,0,1,.7,1.813,2.582,2.582,0,0,1-.961,2.121,4.051,4.051,0,0,1-2.615.778A4.213,4.213,0,0,1,169.519,18Z" fill="#fff"/>
                        <path d="M178.068,18a2.777,2.777,0,0,1-1.029-2.084l2.024-.14a1.439,1.439,0,0,0,.516,1,1.869,1.869,0,0,0,1.229.367,2.057,2.057,0,0,0,1.188-.3,1,1,0,0,0,.42-.874.868.868,0,0,0-.367-.74,2.638,2.638,0,0,0-1.135-.392l-1.188-.174a3.112,3.112,0,0,1-1.807-.812,2.292,2.292,0,0,1-.638-1.7,2.308,2.308,0,0,1,.924-1.91,3.916,3.916,0,0,1,2.478-.725,4.3,4.3,0,0,1,2.523.638,2.326,2.326,0,0,1,.967,1.875l-1.832.174a1.381,1.381,0,0,0-.541-.837,1.933,1.933,0,0,0-1.117-.28,2.088,2.088,0,0,0-1.116.261.806.806,0,0,0-.42.715q0,.84,1.309,1.029l1.185.174a3.971,3.971,0,0,1,2.04.821,2.274,2.274,0,0,1,.7,1.813,2.582,2.582,0,0,1-.961,2.121,4.051,4.051,0,0,1-2.615.778A4.207,4.207,0,0,1,178.068,18Z" fill="#fff"/>
                      </g>
                    </svg>
                  </div>
                </div>
              </Link>

              <div className={styles.tools}>
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
                    minWidth: 0
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "stretch",
                      flexDirection: "row",
                      flexShrink: 1,
                      borderStyle: "solid",
                      borderWidth: 1,
                      position: "relative",
                      minHeight: 0,
                      minWidth: 0,
                      backgroundColor: "rgb(255, 255, 255)",
                      borderColor: "rgb(209, 208, 206)",
                      flexGrow: 1,
                      height: 60,
                      justifyContent: "space-between",
                      padding: 15,
                      transition: "border-color 0.2s ease 0s",
                      borderRadius: 5
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
                        zIndex: 0,
                        minHeight: 0,
                        minWidth: 0,
                        height: 60,
                        left: 0,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "stretch",
                        flexDirection: "column",
                        flexShrink: 1,
                        borderStyle: "solid",
                        borderWidth: 0,
                        position: "relative",
                        zIndex: 0,
                        minHeight: 0,
                        minWidth: 0,
                        flexGrow: 0,
                        top: "-16px",
                        width: "100%"
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
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          opacity: 1,
                          pointerEvents: "none",
                          width: "100%",
                          transform: "translateY(5px)"
                        }}
                      >
                          <span
                            style={{
                              maxWidth: "100%",
                              color: "rgb(120, 116, 113)",
                              fontFamily:
                                '"Klarna Text", "Klarna Sans", Helvetica, Arial, sans-serif',
                              fontWeight: 400,
                              fontSize: 14,
                              lineHeight: "30px",
                              overflow: "hidden",
                              textAlign: "left",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              width: "100%",
                              WebkitFontSmoothing: "antialiased",
                              textSizeAdjust: "none"
                            }}
                          >
                            Land
                          </span>
                      </div>
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
                          zIndex: 0,
                          minHeight: 0,
                          minWidth: 0,
                          color: "rgb(23, 18, 15)",
                          fontFamily:
                            '"Klarna Text", "Klarna Sans", Helvetica, Arial, sans-serif',
                          fontWeight: 500,
                          fontSize: 16,
                          left: 0,
                          opacity: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          top: 0,
                          WebkitFontSmoothing: "antialiased",
                          whiteSpace: "nowrap",
                          width: "100%",
                          transform: "translateY(30px)"
                        }}
                      >
                        Germany
                      </div>
                    </div>
                    <select
                      style={{
                        cursor: "pointer",
                        height: 60,
                        left: 0,
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        appearance: "menulist-button",
                        width: "100%",
                        zIndex: 2
                      }}
                    >
                      <option value="au" label="Australia">
                        Australia
                      </option>
                      <option value="at" label="Austria">
                        Austria
                      </option>
                      <option value="fr-be" label="Belgium (fr)">
                        Belgium (fr)
                      </option>
                      <option value="be" label="Belgium (nl)">
                        Belgium (nl)
                      </option>
                      <option value="ca" label="Canada">
                        Canada
                      </option>
                      <option value="fr-ca" label="Canada (fr)">
                        Canada (fr)
                      </option>
                      <option value="cn" label="China">
                        China
                      </option>
                      <option value="cz" label="Czech Republic">
                        Czech Republic
                      </option>
                      <option value="dk" label="Denmark">
                        Denmark
                      </option>
                      <option value="fi" label="Finland">
                        Finland
                      </option>
                      <option value="fr" label="France">
                        France
                      </option>
                      <option value="de" label="Germany">
                        Germany
                      </option>
                      <option value="gr" label="Greece">
                        Greece
                      </option>
                      <option value="international" label="International">
                        International
                      </option>
                      <option value="ie" label="Ireland">
                        Ireland
                      </option>
                      <option value="it" label="Italy">
                        Italy
                      </option>
                      <option value="jp" label="Japan">
                        Japan
                      </option>
                      <option value="mx" label="Mexico">
                        Mexico
                      </option>
                      <option value="nl" label="Netherlands">
                        Netherlands
                      </option>
                      <option value="nz" label="New Zealand">
                        New Zealand
                      </option>
                      <option value="no" label="Norway">
                        Norway
                      </option>
                      <option value="pl" label="Poland">
                        Poland
                      </option>
                      <option value="pt" label="Portugal">
                        Portugal
                      </option>
                      <option value="es" label="Spain">
                        Spain
                      </option>
                      <option value="se" label="Sweden">
                        Sweden
                      </option>
                      <option value="ch" label="Switzerland (de)">
                        Switzerland (de)
                      </option>
                      <option value="en-ch" label="Switzerland (en)">
                        Switzerland (en)
                      </option>
                      <option value="fr-ch" label="Switzerland (fr)">
                        Switzerland (fr)
                      </option>
                      <option value="it-ch" label="Switzerland (it)">
                        Switzerland (it)
                      </option>
                      <option value="uk" label="United Kingdom">
                        United Kingdom
                      </option>
                      <option value="us" label="United States">
                        United States
                      </option>
                    </select>
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
                        alignSelf: "center",
                        paddingLeft: 5
                      }}
                    >
                      <svg height={20} width={20}>
                        <path
                          d="M9.748,12.889 C9.531,12.889 9.314,12.819 9.133,12.678 L4,8.678 L5.23,7.1 L9.748,10.62 L14.259,7.101 L15.489,8.677 L10.363,12.677 C10.183,12.819 9.965,12.889 9.748,12.889"
                          fill="rgba(120, 116, 113, 1)"
                          style={{transition: "fill 0.2s ease 0s"}}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.socialMedia}>
                <div className={styles.socialMediaWrap}>
                  <Link href={'https://www.facebook.com/Klarna'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </Link>

                  <Link href={'https://www.linkedin.com/company/klarna'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </Link>

                  <Link href={'https://twitter.com/Klarna'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </Link>

                  <Link href={'https://www.instagram.com/klarna/'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-648.000000, -264.000000)" fill="#000000"
                           stroke="#000000" strokeWidth="0">
                          <g transform="translate(639.000000, 255.000000)">
                            <g transform="translate(10.000000, 10.000000)">
                              <g>
                                <path
                                  d="M11.0275584,0.000779550849 C12.8279528,0.00404727617 13.2087532,0.0184638748 14.1229872,0.0601777148 C15.1873706,0.108724776 15.9143063,0.277786048 16.55038,0.525006897 C17.2079684,0.780524015 17.7656443,1.12245728 18.3216134,1.67838663 C18.8775427,2.23435568 19.219476,2.79203161 19.4750328,3.44962002 C19.722214,4.0856937 19.8912752,4.81262938 19.9398223,5.87701279 C19.9884884,6.94361912 20,7.28416306 20,10.0000198 C20,12.7158369 19.9884884,13.0563809 19.9398223,14.1229872 C19.8912752,15.1873706 19.722214,15.9143063 19.4750328,16.55038 C19.219476,17.2079684 18.8775427,17.7656443 18.3216134,18.3216134 C17.7656443,18.8775427 17.2079684,19.219476 16.55038,19.4750328 C15.9143063,19.722214 15.1873706,19.8912752 14.1229872,19.9398223 C13.0563809,19.9884884 12.7158369,20 10.0000198,20 C7.28416306,20 6.94361912,19.9884884 5.87701279,19.9398223 C4.81262938,19.8912752 4.0856937,19.722214 3.44962002,19.4750328 C2.79203161,19.219476 2.23435568,18.8775427 1.67838663,18.3216134 C1.12245728,17.7656443 0.780524015,17.2079684 0.525006897,16.55038 C0.277786048,15.9143063 0.108724776,15.1873706 0.0601777148,14.1229872 C0.0184638748,13.2087532 0.00404727617,12.8279528 0.000779550849,11.0275584 L0.000779550849,8.97246663 C0.00404727617,7.17204719 0.0184638748,6.79124679 0.0601777148,5.87701279 C0.108724776,4.81262938 0.277786048,4.0856937 0.525006897,3.44962002 C0.780524015,2.79203161 1.12245728,2.23435568 1.67838663,1.67838663 C2.23435568,1.12245728 2.79203161,0.780524015 3.44962002,0.525006897 C4.0856937,0.277786048 4.81262938,0.108724776 5.87701279,0.0601777148 C6.79124679,0.0184638748 7.17204719,0.00404727617 8.97246663,0.000779550849 Z M10.5558839,1.80197777 L9.44414763,1.80197777 C7.27898364,1.80351794 6.93549339,1.81556395 5.95914187,1.86011063 C4.98415175,1.9045691 4.45465931,2.06747764 4.10228624,2.2044256 C3.635512,2.38583204 3.30239103,2.60252738 2.95247906,2.95247906 C2.60252738,3.30239103 2.38583204,3.635512 2.2044256,4.10228624 C2.06747764,4.45465931 1.9045691,4.98415175 1.86011063,5.95914187 C1.81556395,6.93549339 1.80351794,7.27898364 1.80197777,9.44414763 L1.80197777,10.5558839 C1.80351794,12.7210164 1.81556395,13.0645066 1.86011063,14.0408581 C1.9045691,15.0158483 2.06747764,15.5453407 2.2044256,15.8977138 C2.38583204,16.364488 2.60256708,16.697609 2.95247906,17.0475209 C3.30239103,17.3974726 3.635512,17.614168 4.10228624,17.7955744 C4.45465931,17.9325224 4.98415175,18.0954309 5.95914187,18.1398894 C6.93538313,18.1844361 7.27879715,18.1964821 9.444108,18.1980222 L10.5559241,18.1980222 C12.7212083,18.1964821 13.0646536,18.1844361 14.0408581,18.1398894 C15.0158483,18.0954309 15.5453407,17.9325224 15.8977138,17.7955744 C16.364488,17.614168 16.697609,17.3974726 17.0475209,17.0475209 C17.3974726,16.697609 17.614168,16.364488 17.7955744,15.8977138 C17.9325224,15.5453407 18.0954309,15.0158483 18.1398894,14.0408581 C18.1844361,13.0645066 18.1964821,12.7210164 18.1980222,10.5558839 L18.1980222,9.44414763 C18.1964821,7.27898364 18.1844361,6.93549339 18.1398894,5.95914187 C18.0954309,4.98415175 17.9325224,4.45465931 17.7955744,4.10228624 C17.614168,3.635512 17.3974726,3.30239103 17.0475209,2.95247906 C16.697609,2.60252738 16.364488,2.38583204 15.8977138,2.2044256 C15.5453407,2.06747764 15.0158483,1.9045691 14.0408581,1.86011063 C13.0645066,1.81556395 12.7210164,1.80351794 10.5558839,1.80197777 Z M10.0000198,4.86486808 C12.8360733,4.86486808 15.1351319,7.16392671 15.1351319,10.0000198 C15.1351319,12.8360733 12.8360733,15.1351319 10.0000198,15.1351319 C7.16392671,15.1351319 4.86486808,12.8360733 4.86486808,10.0000198 C4.86486808,7.16392671 7.16392671,4.86486808 10.0000198,4.86486808 Z M10.0000198,6.66666667 C8.15904224,6.66666667 6.66666667,8.15904224 6.66666667,10.0000198 C6.66666667,11.8409578 8.15904224,13.3333333 10.0000198,13.3333333 C11.8409578,13.3333333 13.3333333,11.8409578 13.3333333,10.0000198 C13.3333333,8.15904224 11.8409578,6.66666667 10.0000198,6.66666667 Z M15.3380134,3.46196518 C16.0007621,3.46196518 16.5380348,3.99923785 16.5380348,4.66198662 C16.5380348,5.32473538 16.0007621,5.86196836 15.3380134,5.86196836 C14.6753043,5.86196836 14.1380316,5.32473538 14.1380316,4.66198662 C14.1380316,3.99923785 14.6753043,3.46196518 15.3380134,3.46196518 Z"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>

              <div className={styles.badges}/>
            </div>

            <div className={styles.right}>
              <div className={styles.desktop}>
                <div className={styles.row}>
                  <div className={styles.column}>
                    <Link href={'https://klarna.com/de/uber-uns/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <h5>Klarna</h5>
                      </span>
                    </Link>

                    <Link href={'https://klarna.com/de/uber-uns/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Über uns</p>
                      </span>
                    </Link>

                    <Link href={'https://klarna.com/de/wikipink/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Wikipink</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/careers/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Karriere</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/international/press/category/dach/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Presse</p>
                      </span>
                    </Link>

                    <Link href={'https://klarna.com/de/datenschutz/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Datenschutz</p>
                      </span>
                    </Link>

                    <Link href={'https://klarna.com/de/anti-geldwasche/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Anti-Geldwäsche</p>
                      </span>
                    </Link>

                    <Link href={'https://klarna.com/de/impressum/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Impressum</p>
                      </span>
                    </Link>

                    <Link href={'https://klarna.com/de/uber-uns/nachhaltigkeit/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Nachhaltigkeit</p>
                      </span>
                    </Link>
                  </div>

                  <div className={styles.column}>
                    <Link href={'https://www.klarna.com/de/jetzt-kaufen-spaeter-bezahlen/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <h5>Privat</h5>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/jetzt-kaufen-spaeter-bezahlen/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Mit Klarna einkaufen</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/klarna-shops/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Klarna Shops</p>
                      </span>
                    </Link>
                    <Link href={'https://www.klarna.com/de/kundenservice/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Kundenservice</p>
                      </span>
                    </Link>

                    <Link href={'https://app.klarna.com/login?market=de'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Einloggen</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/feedback-und-beschwerden/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Feedback und Beschwerden</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/klarna-festgeld/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Festgeld</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/blog/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Extra O Blog</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/unser-versprechen/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Unser Versprechen</p>
                      </span>
                    </Link>
                  </div>

                  <div className={styles.column}>
                    <Link href={'https://www.klarna.com/de/verkaeufer/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <h5>Business</h5>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/verkaeufer/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Mit Klarna verkaufen</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/verkaeufer/haendlersupport/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Händlersupport</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/verkaeufer/plattformen-und-partner/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Plattformen und Partner</p>
                      </span>
                    </Link>

                    <Link href={'https://docs.klarna.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Entwicklerseite</p>
                      </span>
                    </Link>

                    <Link href={'https://portal.klarna.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Händlerportal</p>
                      </span>
                    </Link>

                    <Link href={'https://status.klarna.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Betriebsstatus</p>
                      </span>
                    </Link>

                    <Link href={'https://www.kosma.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Klarna Open Banking</p>
                      </span>
                    </Link>

                    <Link href={'https://www.klarna.com/de/verkaeufer/on-site-marketing-platform/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>On-site Messaging</p>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

              <div className={styles.mobile}>
                <div className={`${styles.collapsible} ${businessOpen && styles.open}`}>
                  <button type={'button'} className={styles.label} onClick={() => this.setState({businessOpen: !businessOpen})}>
                    <h5>Business</h5>
                    <svg height="20" width="20">
                      <path d="M16.3,6.06 L17.714,7.474 L12.128,13.06 C10.958,14.23 9.056,14.23 7.886,13.06 L2.3,7.474 L3.714,6.06 L9.3,11.646 C9.691,12.037 10.323,12.037 10.714,11.646 L16.3,6.06 Z" fill="#fff" style={{transition: "fill 0.2s ease 0s"}}/>
                    </svg>
                  </button>

                  <div className={styles.content}>
                   <div>
                     <Link href={'https://www.klarna.com/de/verkaeufer/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Mit Klarna verkaufen</p>
                      </span>
                     </Link>

                     <Link href={'https://www.klarna.com/de/verkaeufer/haendlersupport/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Händlersupport</p>
                      </span>
                     </Link>

                     <Link href={'https://www.klarna.com/de/verkaeufer/plattformen-und-partner/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Plattformen und Partner</p>
                      </span>
                     </Link>

                     <Link href={'https://docs.klarna.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Entwicklerseite</p>
                      </span>
                     </Link>

                     <Link href={'https://portal.klarna.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Händlerportal</p>
                      </span>
                     </Link>

                     <Link href={'https://status.klarna.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Betriebsstatus</p>
                      </span>
                     </Link>

                     <Link href={'https://www.kosma.com/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Klarna Open Banking</p>
                      </span>
                     </Link>

                     <Link href={'https://www.klarna.com/de/verkaeufer/on-site-marketing-platform/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>On-site Messaging</p>
                      </span>
                     </Link>
                   </div>
                  </div>
                </div>

                <div className={`${styles.collapsible} ${privatOpen && styles.open}`}>
                  <button type={'button'} className={styles.label} onClick={() => this.setState({privatOpen: !privatOpen})}>
                    <h5>Privat</h5>
                    <svg height="20" width="20">
                      <path d="M16.3,6.06 L17.714,7.474 L12.128,13.06 C10.958,14.23 9.056,14.23 7.886,13.06 L2.3,7.474 L3.714,6.06 L9.3,11.646 C9.691,12.037 10.323,12.037 10.714,11.646 L16.3,6.06 Z" fill="#fff" style={{transition: "fill 0.2s ease 0s"}}/>
                    </svg>
                  </button>

                  <div className={styles.content}>
                    <div>
                      <Link href={'https://www.klarna.com/de/jetzt-kaufen-spaeter-bezahlen/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Mit Klarna einkaufen</p>
                      </span>
                      </Link>

                      <Link href={'https://www.klarna.com/de/klarna-shops/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Klarna Shops</p>
                      </span>
                      </Link>
                      <Link href={'https://www.klarna.com/de/kundenservice/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Kundenservice</p>
                      </span>
                      </Link>

                      <Link href={'https://app.klarna.com/login?market=de'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Einloggen</p>
                      </span>
                      </Link>

                      <Link href={'https://www.klarna.com/de/feedback-und-beschwerden/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Feedback und Beschwerden</p>
                      </span>
                      </Link>

                      <Link href={'https://www.klarna.com/de/klarna-festgeld/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Festgeld</p>
                      </span>
                      </Link>

                      <Link href={'https://www.klarna.com/de/blog/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Extra O Blog</p>
                      </span>
                      </Link>

                      <Link href={'https://www.klarna.com/de/unser-versprechen/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Unser Versprechen</p>
                      </span>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className={`${styles.collapsible} ${klarnaOpen && styles.open}`}>
                  <button type={'button'} className={styles.label} onClick={() => this.setState({klarnaOpen: !klarnaOpen})}>
                    <h5>Klarna</h5>
                    <svg height="20" width="20">
                      <path d="M16.3,6.06 L17.714,7.474 L12.128,13.06 C10.958,14.23 9.056,14.23 7.886,13.06 L2.3,7.474 L3.714,6.06 L9.3,11.646 C9.691,12.037 10.323,12.037 10.714,11.646 L16.3,6.06 Z" fill="#fff" style={{transition: "fill 0.2s ease 0s"}}/>
                    </svg>
                  </button>

                  <div className={styles.content}>
                    <div>
                      <Link href={'https://klarna.com/de/uber-uns/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Über uns</p>
                      </span>
                      </Link>

                      <Link href={'https://klarna.com/de/wikipink/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Wikipink</p>
                      </span>
                      </Link>

                      <Link href={'https://www.klarna.com/careers/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Karriere</p>
                      </span>
                      </Link>

                      <Link href={'https://www.klarna.com/international/press/category/dach/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Presse</p>
                      </span>
                      </Link>

                      <Link href={'https://klarna.com/de/datenschutz/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Datenschutz</p>
                      </span>
                      </Link>

                      <Link href={'https://klarna.com/de/anti-geldwasche/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Anti-Geldwäsche</p>
                      </span>
                      </Link>

                      <Link href={'https://klarna.com/de/impressum/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Impressum</p>
                      </span>
                      </Link>

                      <Link href={'https://klarna.com/de/uber-uns/nachhaltigkeit/'} className={styles.hyperlink}>
                      <span className={styles.hyperlinkWrap}>
                        <p>Nachhaltigkeit</p>
                      </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.tools}>
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
                    minWidth: 0
                  }}
                >
                  <div
                    style={{
                      boxSizing: "border-box",
                      display: "flex",
                      alignItems: "stretch",
                      flexDirection: "row",
                      flexShrink: 1,
                      borderStyle: "solid",
                      borderWidth: 1,
                      position: "relative",
                      minHeight: 0,
                      minWidth: 0,
                      backgroundColor: "rgb(255, 255, 255)",
                      borderColor: "rgb(209, 208, 206)",
                      flexGrow: 1,
                      height: 60,
                      justifyContent: "space-between",
                      padding: 15,
                      transition: "border-color 0.2s ease 0s",
                      borderRadius: 5
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
                        zIndex: 0,
                        minHeight: 0,
                        minWidth: 0,
                        height: 60,
                        left: 0,
                        width: "100%"
                      }}
                    />
                    <div
                      style={{
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "stretch",
                        flexDirection: "column",
                        flexShrink: 1,
                        borderStyle: "solid",
                        borderWidth: 0,
                        position: "relative",
                        zIndex: 0,
                        minHeight: 0,
                        minWidth: 0,
                        flexGrow: 0,
                        top: "-16px",
                        width: "100%"
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
                          backgroundColor: "rgba(255, 255, 255, 0)",
                          opacity: 1,
                          pointerEvents: "none",
                          width: "100%",
                          transform: "translateY(5px)"
                        }}
                      >
                          <span
                            style={{
                              maxWidth: "100%",
                              color: "rgb(120, 116, 113)",
                              fontFamily:
                                '"Klarna Text", "Klarna Sans", Helvetica, Arial, sans-serif',
                              fontWeight: 400,
                              fontSize: 14,
                              lineHeight: "30px",
                              overflow: "hidden",
                              textAlign: "left",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              width: "100%",
                              WebkitFontSmoothing: "antialiased",
                              textSizeAdjust: "none"
                            }}
                          >
                            Land
                          </span>
                      </div>
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
                          zIndex: 0,
                          minHeight: 0,
                          minWidth: 0,
                          color: "rgb(23, 18, 15)",
                          fontFamily:
                            '"Klarna Text", "Klarna Sans", Helvetica, Arial, sans-serif',
                          fontWeight: 500,
                          fontSize: 16,
                          left: 0,
                          opacity: 1,
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                          top: 0,
                          WebkitFontSmoothing: "antialiased",
                          whiteSpace: "nowrap",
                          width: "100%",
                          transform: "translateY(30px)"
                        }}
                      >
                        Germany
                      </div>
                    </div>
                    <select
                      style={{
                        cursor: "pointer",
                        height: 60,
                        left: 0,
                        opacity: 0,
                        position: "absolute",
                        top: 0,
                        appearance: "menulist-button",
                        width: "100%",
                        zIndex: 2
                      }}
                    >
                      <option value="au" label="Australia">
                        Australia
                      </option>
                      <option value="at" label="Austria">
                        Austria
                      </option>
                      <option value="fr-be" label="Belgium (fr)">
                        Belgium (fr)
                      </option>
                      <option value="be" label="Belgium (nl)">
                        Belgium (nl)
                      </option>
                      <option value="ca" label="Canada">
                        Canada
                      </option>
                      <option value="fr-ca" label="Canada (fr)">
                        Canada (fr)
                      </option>
                      <option value="cn" label="China">
                        China
                      </option>
                      <option value="cz" label="Czech Republic">
                        Czech Republic
                      </option>
                      <option value="dk" label="Denmark">
                        Denmark
                      </option>
                      <option value="fi" label="Finland">
                        Finland
                      </option>
                      <option value="fr" label="France">
                        France
                      </option>
                      <option value="de" label="Germany">
                        Germany
                      </option>
                      <option value="gr" label="Greece">
                        Greece
                      </option>
                      <option value="international" label="International">
                        International
                      </option>
                      <option value="ie" label="Ireland">
                        Ireland
                      </option>
                      <option value="it" label="Italy">
                        Italy
                      </option>
                      <option value="jp" label="Japan">
                        Japan
                      </option>
                      <option value="mx" label="Mexico">
                        Mexico
                      </option>
                      <option value="nl" label="Netherlands">
                        Netherlands
                      </option>
                      <option value="nz" label="New Zealand">
                        New Zealand
                      </option>
                      <option value="no" label="Norway">
                        Norway
                      </option>
                      <option value="pl" label="Poland">
                        Poland
                      </option>
                      <option value="pt" label="Portugal">
                        Portugal
                      </option>
                      <option value="es" label="Spain">
                        Spain
                      </option>
                      <option value="se" label="Sweden">
                        Sweden
                      </option>
                      <option value="ch" label="Switzerland (de)">
                        Switzerland (de)
                      </option>
                      <option value="en-ch" label="Switzerland (en)">
                        Switzerland (en)
                      </option>
                      <option value="fr-ch" label="Switzerland (fr)">
                        Switzerland (fr)
                      </option>
                      <option value="it-ch" label="Switzerland (it)">
                        Switzerland (it)
                      </option>
                      <option value="uk" label="United Kingdom">
                        United Kingdom
                      </option>
                      <option value="us" label="United States">
                        United States
                      </option>
                    </select>
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
                        alignSelf: "center",
                        paddingLeft: 5
                      }}
                    >
                      <svg height={20} width={20}>
                        <path
                          d="M9.748,12.889 C9.531,12.889 9.314,12.819 9.133,12.678 L4,8.678 L5.23,7.1 L9.748,10.62 L14.259,7.101 L15.489,8.677 L10.363,12.677 C10.183,12.819 9.965,12.889 9.748,12.889"
                          fill="rgba(120, 116, 113, 1)"
                          style={{transition: "fill 0.2s ease 0s"}}
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.socialMedia}>
                <div className={styles.socialMediaWrap}>
                  <Link href={'https://www.facebook.com/Klarna'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                    </svg>
                  </Link>

                  <Link href={'https://www.linkedin.com/company/klarna'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                    </svg>
                  </Link>

                  <Link href={'https://twitter.com/Klarna'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                    </svg>
                  </Link>

                  <Link href={'https://www.instagram.com/klarna/'} className={styles.icon}>
                    <svg width="24" height="24" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                        <g transform="translate(-648.000000, -264.000000)" fill="#000000"
                           stroke="#000000" strokeWidth="0">
                          <g transform="translate(639.000000, 255.000000)">
                            <g transform="translate(10.000000, 10.000000)">
                              <g>
                                <path
                                  d="M11.0275584,0.000779550849 C12.8279528,0.00404727617 13.2087532,0.0184638748 14.1229872,0.0601777148 C15.1873706,0.108724776 15.9143063,0.277786048 16.55038,0.525006897 C17.2079684,0.780524015 17.7656443,1.12245728 18.3216134,1.67838663 C18.8775427,2.23435568 19.219476,2.79203161 19.4750328,3.44962002 C19.722214,4.0856937 19.8912752,4.81262938 19.9398223,5.87701279 C19.9884884,6.94361912 20,7.28416306 20,10.0000198 C20,12.7158369 19.9884884,13.0563809 19.9398223,14.1229872 C19.8912752,15.1873706 19.722214,15.9143063 19.4750328,16.55038 C19.219476,17.2079684 18.8775427,17.7656443 18.3216134,18.3216134 C17.7656443,18.8775427 17.2079684,19.219476 16.55038,19.4750328 C15.9143063,19.722214 15.1873706,19.8912752 14.1229872,19.9398223 C13.0563809,19.9884884 12.7158369,20 10.0000198,20 C7.28416306,20 6.94361912,19.9884884 5.87701279,19.9398223 C4.81262938,19.8912752 4.0856937,19.722214 3.44962002,19.4750328 C2.79203161,19.219476 2.23435568,18.8775427 1.67838663,18.3216134 C1.12245728,17.7656443 0.780524015,17.2079684 0.525006897,16.55038 C0.277786048,15.9143063 0.108724776,15.1873706 0.0601777148,14.1229872 C0.0184638748,13.2087532 0.00404727617,12.8279528 0.000779550849,11.0275584 L0.000779550849,8.97246663 C0.00404727617,7.17204719 0.0184638748,6.79124679 0.0601777148,5.87701279 C0.108724776,4.81262938 0.277786048,4.0856937 0.525006897,3.44962002 C0.780524015,2.79203161 1.12245728,2.23435568 1.67838663,1.67838663 C2.23435568,1.12245728 2.79203161,0.780524015 3.44962002,0.525006897 C4.0856937,0.277786048 4.81262938,0.108724776 5.87701279,0.0601777148 C6.79124679,0.0184638748 7.17204719,0.00404727617 8.97246663,0.000779550849 Z M10.5558839,1.80197777 L9.44414763,1.80197777 C7.27898364,1.80351794 6.93549339,1.81556395 5.95914187,1.86011063 C4.98415175,1.9045691 4.45465931,2.06747764 4.10228624,2.2044256 C3.635512,2.38583204 3.30239103,2.60252738 2.95247906,2.95247906 C2.60252738,3.30239103 2.38583204,3.635512 2.2044256,4.10228624 C2.06747764,4.45465931 1.9045691,4.98415175 1.86011063,5.95914187 C1.81556395,6.93549339 1.80351794,7.27898364 1.80197777,9.44414763 L1.80197777,10.5558839 C1.80351794,12.7210164 1.81556395,13.0645066 1.86011063,14.0408581 C1.9045691,15.0158483 2.06747764,15.5453407 2.2044256,15.8977138 C2.38583204,16.364488 2.60256708,16.697609 2.95247906,17.0475209 C3.30239103,17.3974726 3.635512,17.614168 4.10228624,17.7955744 C4.45465931,17.9325224 4.98415175,18.0954309 5.95914187,18.1398894 C6.93538313,18.1844361 7.27879715,18.1964821 9.444108,18.1980222 L10.5559241,18.1980222 C12.7212083,18.1964821 13.0646536,18.1844361 14.0408581,18.1398894 C15.0158483,18.0954309 15.5453407,17.9325224 15.8977138,17.7955744 C16.364488,17.614168 16.697609,17.3974726 17.0475209,17.0475209 C17.3974726,16.697609 17.614168,16.364488 17.7955744,15.8977138 C17.9325224,15.5453407 18.0954309,15.0158483 18.1398894,14.0408581 C18.1844361,13.0645066 18.1964821,12.7210164 18.1980222,10.5558839 L18.1980222,9.44414763 C18.1964821,7.27898364 18.1844361,6.93549339 18.1398894,5.95914187 C18.0954309,4.98415175 17.9325224,4.45465931 17.7955744,4.10228624 C17.614168,3.635512 17.3974726,3.30239103 17.0475209,2.95247906 C16.697609,2.60252738 16.364488,2.38583204 15.8977138,2.2044256 C15.5453407,2.06747764 15.0158483,1.9045691 14.0408581,1.86011063 C13.0645066,1.81556395 12.7210164,1.80351794 10.5558839,1.80197777 Z M10.0000198,4.86486808 C12.8360733,4.86486808 15.1351319,7.16392671 15.1351319,10.0000198 C15.1351319,12.8360733 12.8360733,15.1351319 10.0000198,15.1351319 C7.16392671,15.1351319 4.86486808,12.8360733 4.86486808,10.0000198 C4.86486808,7.16392671 7.16392671,4.86486808 10.0000198,4.86486808 Z M10.0000198,6.66666667 C8.15904224,6.66666667 6.66666667,8.15904224 6.66666667,10.0000198 C6.66666667,11.8409578 8.15904224,13.3333333 10.0000198,13.3333333 C11.8409578,13.3333333 13.3333333,11.8409578 13.3333333,10.0000198 C13.3333333,8.15904224 11.8409578,6.66666667 10.0000198,6.66666667 Z M15.3380134,3.46196518 C16.0007621,3.46196518 16.5380348,3.99923785 16.5380348,4.66198662 C16.5380348,5.32473538 16.0007621,5.86196836 15.3380134,5.86196836 C14.6753043,5.86196836 14.1380316,5.32473538 14.1380316,4.66198662 C14.1380316,3.99923785 14.6753043,3.46196518 15.3380134,3.46196518 Z"/>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.siteWidth}>
            <div className={styles.bottomMenu}>
              <p className={styles.copyright}>
                Copyright © 2005-2022 Klarna Bank AB (publ). Headquarters: Stockholm, Sweden. All rights reserved.
                Klarna Bank AB (publ). Sveavägen 46, 111 34 Stockholm. Organization number: 556737-0431
              </p>

              <Link href={'https://www.klarna.com/de/datenschutz/'} className={styles.hyperlink}>
                <span className={styles.hyperlinkWrap}>
                  <p className={styles.small}>
                    Datenschutz
                  </p>
                </span>
              </Link>

              <Link href={'https://www.klarna.com/de/agb/'} className={styles.hyperlink}>
                <span className={styles.hyperlinkWrap}>
                  <p className={styles.small}>
                    AGB
                  </p>
                </span>
              </Link>

              <Link href={'https://www.klarna.com/de/cookies/'} className={styles.hyperlink}>
                <span className={styles.hyperlinkWrap}>
                  <p className={styles.small}>
                    Cookies
                  </p>
                </span>
              </Link>

              <Link href={'https://www.klarna.com/de/sitemap/'} className={styles.hyperlink}>
                <span className={styles.hyperlinkWrap}>
                  <p className={styles.small}>
                    Sitemap
                  </p>
                </span>
              </Link>

              <Link href={'https://www.klarna.com/'} className={styles.hyperlink}>
                <span className={styles.hyperlinkWrap}>
                  <p className={styles.small}>
                    Klarna.com
                  </p>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
