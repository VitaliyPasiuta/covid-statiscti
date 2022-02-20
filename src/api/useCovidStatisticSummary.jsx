import { useEffect, useState } from "react";

export const useCovidStatisticSummary = () => {
  const [statisticSummary, setStatisticSummary] = useState({});

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((country) => {
        setStatisticSummary(country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return statisticSummary;
};
