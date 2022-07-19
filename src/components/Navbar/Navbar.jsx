import React from "react";
import styles from "./Navbar.module.css";
import { FaRegMoon, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={styles.main_navbar}
      style={
        darkMode
          ? { backgroundColor: "#2b3945" }
          : { backgroundColor: "#ffffff" }
      }
    >
      <div className={styles.inner_main_navbar}>
        <div className={styles.left_navbar}>
          <h1>Where in the world?</h1>
        </div>
        <div className={styles.right_navbar}>
          <div
            className={styles.darkmode_btn}
            onClick={() => {
              if (darkMode) {
                setDarkMode(false);
              } else {
                setDarkMode(true);
              }
            }}
          >
            {darkMode ? (
              <FaMoon size={"0.8rem"} />
            ) : (
              <FaRegMoon size={"0.8rem"} />
            )}
            <p>Dark Mode</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
