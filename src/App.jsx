import React, { useState } from "react";
import styles from "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./pages/Homepage/Homepage";
import CountryPage from "./pages/CountryPage/CountryPage";
import Footer from "./components/Footer/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [viewCountry, setViewCountry] = useState(false);
  const [viewCountryData, setViewCountryData] = useState("");

  return (
    <div
      className={styles.app_container}
      style={darkMode ? { color: "#fff" } : { color: "#000" }}
    >
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {viewCountry ? (
        <CountryPage
          darkMode={darkMode}
          setViewCountry={setViewCountry}
          viewCountryData={viewCountryData}
          setViewCountryData={setViewCountryData}
        />
      ) : (
        <Homepage
          darkMode={darkMode}
          setViewCountry={setViewCountry}
          viewCountryData={viewCountryData}
          setViewCountryData={setViewCountryData}
        />
      )}

      <Footer darkMode={darkMode} />
    </div>
  );
}

export default App;
