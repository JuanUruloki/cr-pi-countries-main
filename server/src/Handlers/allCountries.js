const { Country, Activity } = require("../db");


const getAllCountries = async()=>{
const allCountries = await Country.findAll({
    attributes: ["name", "id", "flag", "continent", "population"],
    include: Activity,
  });
  return allCountries;
}

module.exports = getAllCountries;