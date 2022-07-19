import React from "react";
import styles from "./Footer.module.css";

const Footer = ({ darkMode }) => {
  return (
    <footer
      style={
        darkMode
          ? { backgroundColor: "#2b3945" }
          : { backgroundColor: "#ffffff" }
      }
      className={styles.footer_container}
    >
      <p>
        Challenge by{" "}
        <a
          style={darkMode ? { color: "#fff" } : { color: "#000" }}
          href="https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca/hub/rest-countries-api-with-color-theme-switcher-BDxqw0Xygb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          style={darkMode ? { color: "#fff" } : { color: "#000" }}
          href="https://ckn-portfolio.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ckeanu
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
