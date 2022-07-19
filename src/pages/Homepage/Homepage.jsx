import React, { useState, useEffect } from "react";
import Axios from "axios";
import styles from "./Homepage.module.css";
import { BiSearchAlt2 } from "react-icons/bi";
import { BsChevronDown } from "react-icons/bs";
import { ImSpinner4 } from "react-icons/im";
import Country from "../../components/Country/Country";

const Homepage = ({ darkMode, setViewCountry, setViewCountryData }) => {
  let regionList = ["all", "africa", "america", "asia", "europe", "oceania"];

  const [loading, setLoading] = useState(true);
  const [allCountry, setAllCountry] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [dropdownDisplay, setDropdownDisplay] = useState("Filter by Region");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    setLoading(true);

    if (dropdownDisplay === "Filter by Region") {
      Axios.get("https://restcountries.com/v3.1/all").then((response) => {
        setAllCountry(response.data);
        setLoading(false);
      });
    } else {
      Axios.get(
        `https://restcountries.com/v3.1/region/${dropdownDisplay}`
      ).then((response) => {
        setAllCountry(response.data);
        setLoading(false);
      });
    }
  }, [dropdownDisplay]);

  const filteredCountryList = allCountry.filter((data) => {
    return data.name.common.toLowerCase().includes(searchInput.toLowerCase());
  });

  return (
    <div
      className={styles.outer_home_container}
      style={
        darkMode
          ? { backgroundColor: "#202c37" }
          : { backgroundColor: "#fafafa" }
      }
    >
      <div className={styles.home_container}>
        <div className={styles.search_container}>
          <div
            className={styles.left_search_content}
            style={
              darkMode
                ? { backgroundColor: "#2b3945" }
                : { backgroundColor: "#ffffff" }
            }
          >
            <div className={styles.search_button}>
              <BiSearchAlt2 />
            </div>
            <input
              type="text"
              placeholder="Search for a country..."
              style={darkMode ? { color: "#fff" } : { color: "#000" }}
              value={searchInput}
              onChange={(e) => {
                setSearchInput(e.target.value);
              }}
            />
          </div>
          <div
            className={styles.right_search_content}
            style={
              darkMode
                ? { backgroundColor: "#2b3945" }
                : { backgroundColor: "#ffffff" }
            }
            onClick={() => {
              if (showDropdown) {
                setShowDropdown(false);
              } else {
                setShowDropdown(true);
              }
            }}
          >
            <p className={styles.category_p}>{dropdownDisplay}</p>
            <div className={styles.drop_filter_button}>
              <BsChevronDown />
            </div>
            {showDropdown && (
              <div
                className={styles.drop_down_options}
                style={
                  darkMode
                    ? { backgroundColor: "#2b3945" }
                    : { backgroundColor: "#ffffff" }
                }
              >
                {regionList.map((region, i) => {
                  return (
                    <p
                      className={styles.options_drop}
                      key={i}
                      onClick={() => {
                        if (region === "all") {
                          setDropdownDisplay("Filter by Region");
                        } else {
                          setDropdownDisplay(region);
                        }
                        if (showDropdown) {
                          setShowDropdown(false);
                        } else {
                          setShowDropdown(true);
                        }

                        setSearchInput("");
                      }}
                    >
                      {region}
                    </p>
                  );
                })}
              </div>
            )}
          </div>
        </div>

        {loading ? (
          <div className={styles.loading_container}>
            <p className={styles.loading_icon}>
              <ImSpinner4 size={"2rem"} />
            </p>
          </div>
        ) : (
          <Country
            filteredCountryList={filteredCountryList}
            darkMode={darkMode}
            setViewCountry={setViewCountry}
            setViewCountryData={setViewCountryData}
          />
        )}
      </div>
    </div>
  );
};

export default Homepage;
