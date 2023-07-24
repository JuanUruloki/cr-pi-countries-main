const { Country } = require("../db");
const { Op } = require("sequelize");

const getById = async (id) => {
  const countryById = await Country.findOne({
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
    where: { id: { [Op.iLike]: `%${id}` } },
  });
  return countryById;
};

module.exports = getById;
