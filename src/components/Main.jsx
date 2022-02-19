import React, { useState, useEffect } from "react";
import { Header } from "./Header";
import { List } from "./List";
import { PopUp } from "./PopUp";
import '../css/Main.css';

export const Main = () => {
  const [result, setResult] = useState({});
  const [searchfield, setSearchfield] = useState("");
  const [showPopUp, setShowPopUp] = useState(false);
  const [dataPopUp, setDataPopUp] = useState({});

  const filteredResult =
    Object.keys(result).length !== 0
      ? result.Countries.filter((el) => {
          return el.Country.toLowerCase().includes(searchfield.toLowerCase());
        })
      : [];
  const choiseItem = (country) => {
    const res = filteredResult.filter((el) => {
      return el.Country.toLowerCase().includes(country.toLowerCase());
    });
    setDataPopUp(res);
    setShowPopUp(true);
  };
  const closePopUp = ()=>{
    setShowPopUp(false)
  }
  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((users) => {
        setResult(users);
      });
  }, []);

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
        closePopUp={closePopUp}/>
      )}
    </div>
  );
};
