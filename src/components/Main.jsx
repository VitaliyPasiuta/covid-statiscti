import React, { useEffect, useState } from "react";
import { Header } from "./Header";
import { List } from "./List";
import { PopUp } from "./PopUp";
import { useCovidStatisticSummary } from "../api/useCovidStatisticSummary";
import "../css/Main.css";

export const Main = () => {
  const [searchfield, setSearchfield] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [dataPopUp, setDataPopUp] = useState({});
  const [filteredStatisticSummary, setFilteredStatisticSummary] = useState([]);
  const statisticSummary = useCovidStatisticSummary();

  useEffect(() => {
    setFilteredStatisticSummary(
      Object.keys(statisticSummary).length !== 0
        ? filterData(statisticSummary.Countries, searchfield)
        : []
    );
  }, [searchfield]);

  function filterData(parent, element) {
    return parent.filter((el) => {
      return el.Country.toLowerCase().includes(element.toLowerCase());
    });
  }

  const choiseItem = (country) => {
    const res = filterData(filteredStatisticSummary, country);
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
        {Object.keys(filteredStatisticSummary).length !== 0 && (
          <List
            countriesObj={filteredStatisticSummary}
            choiseItem={choiseItem}
          />
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
