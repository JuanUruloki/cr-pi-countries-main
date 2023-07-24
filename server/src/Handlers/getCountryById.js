const getAllCountries = require("../Controllers/allCountries");
const getById = require("../Controllers/countryById");

const getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    if (!id) {
      const allCountries = await getAllCountries();
      return res.status(200).json(allCountries);
    } else {
      const countryById = await getById(id);
      return res.status(200).json(countryById);
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getCountryById;
