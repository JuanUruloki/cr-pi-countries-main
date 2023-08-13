const { Country, Activity } = require("../db");
const { Op } = require("sequelize");

const createActivity = async ( name, difficulty, duration, season, countries ) => {
  let newActivity = await Activity.create({
    name,
    difficulty,
    duration,
    season,
    
  });

  countries.forEach(country => {
    newActivity.addCountry(country)
  });

  // countries.forEach(async (country) => {
  //   const countryDb = await Country.findOne({
  //     where: { name: { [Op.iLike]: `%${name}%` } },
  //   });
  //   await newActivity.addCountry(countryDb);
  // });
};

module.exports = createActivity;