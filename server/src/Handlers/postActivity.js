const createActivity = require("../Controllers/createActivity");

const postActivity = async (req, res) => {
  try {
    const { name, difficulty, duration, season, countries } = req.body;

    if (!name || !difficulty || !duration || !season || !countries.length) {
      return res.status(400).send("Missing Data");
    }

    await createActivity( name, difficulty, duration, season, countries );

    return res.status(200).send("Activity succesfully created");
  } catch (error) {
    res.status(400).send("Could not create activity");
  }
};

module.exports = postActivity;
