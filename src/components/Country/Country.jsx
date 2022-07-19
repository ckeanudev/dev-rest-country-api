import React from "react";
import styles from "./Country.module.css";

const Country = ({
  filteredCountryList,
  darkMode,
  setViewCountry,
  setViewCountryData,
}) => {
  return (
    <div className={styles.country_container}>
      {filteredCountryList.map((data, i) => {
        return (
          <div
            className={styles.country_content}
            key={i}
            onClick={() => {
              setViewCountryData(data.name.common);
              setViewCountry(true);
            }}
          >
            <div
              className={styles.top_country}
              style={
                darkMode
                  ? {
                      backgroundColor: "#2b3945",
                    }
                  : {
                      backgroundColor: "#ffffff",
                    }
              }
            >
              <img src={data.flags.svg} alt="country_flag" />
            </div>
            <div
              className={styles.bottom_country}
              style={
                darkMode
                  ? { backgroundColor: "#2b3945" }
                  : { backgroundColor: "#ffffff" }
              }
            >
              <h2>{data.name.common}</h2>

              <p>
                <strong>Population: </strong>{" "}
                {data.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
              </p>
              <p>
                <strong>Region: </strong> {data.region}
              </p>
              <p>
                <strong>Capital: </strong> {data.capital}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
