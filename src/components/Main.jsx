import React, { useState } from "react";
import { Header } from "./Header";
import { List } from "./List";
import { PopUp } from "./PopUp";
import { useCovidStatisticSummary } from "../api/useCovidStatisticSummary";
import "../css/Main.css";

export const Main = () => {
  const [searchfield, setSearchfield] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [dataPopUp, setDataPopUp] = useState({});
  const statisticSummary = useCovidStatisticSummary();

  function filterData(parent, element) {
    return parent.filter((el) => {
      return el.Country.toLowerCase().includes(element.toLowerCase());
    });
  }

  const filteredResult =
    Object.keys(statisticSummary).length !== 0
      ? filterData(statisticSummary.Countries, searchfield)
      : [];
  const choiseItem = (country) => {
    const res = filterData(filteredResult, country);
    setDataPopUp(res);
    setShowPopUp(true);
  };
  const closePopUp = () => {
    setShowPopUp(false);
  };

  return (
    <div className="main">
      <Header searchChange={setSearchfield} />
      <div className="list-wrapper">
        {Object.keys(filteredResult).length !== 0 && (
          <List countriesObj={filteredResult} choiseItem={choiseItem} />
        )}
      </div>
      {showPopUp && Object.keys(dataPopUp).length !== 0 && (
        <PopUp
          name={dataPopUp[0].Country}
          totalConfirmed={dataPopUp[0].TotalConfirmed}
          totalDeaths={dataPopUp[0].TotalDeaths}
          totalRecovered={dataPopUp[0].TotalRecovered}
          closePopUp={closePopUp}
        />
      )}
    </div>
  );
};
