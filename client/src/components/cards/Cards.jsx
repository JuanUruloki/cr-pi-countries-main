// import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/Card";

const Cards = () => {
  const countries = useSelector((state) => state.countries);
  const foundCountries = useSelector((state) => state.foundCountries);
  
  return (
    <div>
      {foundCountries.length ? (foundCountries.map((country) => {
        return (
          <Card
            id={country.id}
            key={country.id}
            image={country.flag}
            name={country.name}
            continent={country.continent}
          />
        )})) : (countries.map((country) => {
        return (
          <Card
            id={country.id}
            key={country.id}
            image={country.flag}
            name={country.name}
            continent={country.continent}
          />
        );
      }))}
    </div>
  );
};

export default Cards;
