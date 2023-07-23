const express = require("express");
const { Country } = require("../db");
const axios = require("axios");

const getApiData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/countries");
    const data = response.data;
   
    const countries = data.map((country) => {
      return {
        id: country.cca3,
        name: country.name.common,
        flag: country.flags.png,
        continent: country.continents[0],
        capital: country.capital ? country.capital[0] : "not found",
        subregion: country.subregion ? country.subregion[0] : "not found",
        area: country.area,
        population: country.population,
      };
    });
    
    await Promise.all(countries.map((country) => Country.create(country)));
    console.log("Countries added successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getApiData;
