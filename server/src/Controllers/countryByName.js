const { Country } = require("../db");
const { Op } = require("sequelize");


const countryByName = async (name) =>{
const countryFounded = await Country.findAll({
    attributes: [
      "name",
      "flag",
      "continent",
      "id",
      "capital",
      "subregion",
      "area",
      "population",
    ],
    where: { name: { [Op.iLike]: `%${name}%` } },
  });
  return countryFounded;
}

module.exports = countryByName;