import React, { useEffect, useState } from "react";
import styles from "./CountryPage.module.css";
import Axios from "axios";
import { BiArrowBack } from "react-icons/bi";
import { ImSpinner4 } from "react-icons/im";

const CountryPage = ({
  darkMode,
  setViewCountry,
  viewCountryData,
  setViewCountryData,
}) => {
  const [loading, setLoading] = useState(true);

  const [countryData, setCountryData] = useState([]);
  const [langaugesData, setLangaugesData] = useState([]);
  const [currencyData, setCurrencyData] = useState("");
  const [nativeNameData, setNativeNameData] = useState("");

  const joinLanguages = (data) => {
    const result = Object.values(data)
      .map((item) => item)
      .join(", ");

    setLangaugesData(result);

    setLoading(false);
  };

  const getCurrencies = (data1, data2) => {
    let tempD1 = Object.values(data1);
    let tempD2 = Object.values(data2);

    setCurrencyData(tempD1[0].name);
    setNativeNameData(tempD2[0].common);
  };

  useEffect(() => {
    setLoading(true);

    Axios.get(
      `https://restcountries.com/v3.1/name/${viewCountryData.toLowerCase()}?fullText=true`
    ).then((response) => {
      setCountryData(response.data[0]);
      joinLanguages(response.data[0].languages);
      getCurrencies(
        response.data[0].currencies,
        response.data[0].name.nativeName
      );
    });
  }, []);

  return (
    <div
      className={styles.country_page_container}
      style={
        darkMode
          ? { backgroundColor: "#202c37" }
          : { backgroundColor: "#fafafa" }
      }
    >
      <div className={styles.inner_country_page_container}>
        <div className={styles.top_container_country}>
          <div
            className={styles.back_btn}
            style={
              darkMode
                ? { backgroundColor: "#2b3945" }
                : { backgroundColor: "#ffffff" }
            }
            onClick={() => {
              setViewCountryData("");
              setViewCountry(false);
            }}
          >
            <BiArrowBack />
            Back
          </div>
        </div>

        {!loading ? (
          <div className={styles.country_body_container}>
            <div className={styles.left_country_page}>
              <img src={countryData.flags.svg} alt="country_flag" />
            </div>
            <div className={styles.right_country_page}>
              <h2>{countryData.name.common}</h2>

              <div className={styles.inner_country_first_line}>
                <div className={styles.inner_left}>
                  <p>
                    <strong>Native Name: </strong>
                    {nativeNameData}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {countryData.population
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {countryData.region}
                  </p>
                  <p>
                    <strong>Sub Region: </strong>
                    {countryData.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {countryData.capital}
                  </p>
                </div>
                <div className={styles.inner_right}>
                  <p>
                    <strong>Top Level Domain: </strong>
                    {countryData.tld[0]}
                  </p>
                  <p>
                    <strong>Currencies : </strong> {currencyData}
                  </p>
                  <p>
                    <strong>Languages: </strong>
                    {langaugesData}
                  </p>
                </div>
              </div>
              <div className={styles.inner_country_second_line}>
                {countryData.borders && (
                  <div>
                    <strong>Bordee Countries: </strong>{" "}
                    {countryData.borders.map((data, i) => {
                      return (
                        <p
                          key={i}
                          style={
                            darkMode
                              ? { backgroundColor: "#2b3945" }
                              : { backgroundColor: "#ffffff" }
                          }
                        >
                          {data}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.loading_container}>
            <p className={styles.loading_icon}>
              <ImSpinner4 size={"2rem"} />
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CountryPage;
