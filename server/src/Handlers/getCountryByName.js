const getAllCountries = require("../Controllers/allCountries");
const countryByName = require("../Controllers/countryByName");

const getCountryByName = async (req, res) => {
  const { name } = req.query;
  try {
    if (!name) {
      const allCountries = await getAllCountries();
      return res.status(200).json(allCountries);
    } else {
      const countryFounded = await countryByName(name);
      return res.status(200).json(countryFounded);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getCountryByName;
