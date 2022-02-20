import { useEffect, useState } from "react";

export const useGetCountry = () => {
  const [result, setResult] = useState({});

  useEffect(() => {
    fetch("https://api.covid19api.com/summary")
      .then((response) => {
        return response.json();
      })
      .then((country) => {
        setResult(country);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return result;
};
