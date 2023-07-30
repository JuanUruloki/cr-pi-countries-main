const { Country, Activity} = require("../db");
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
    include: [{ model: Activity, attributes: ['name'], through: { attributes: [] } }],
  });
  return countryFounded;
}

module.exports = countryByName;