const { Country, Activity } = require("../db");

const allActivities =async ()=>{
const activities = await Activity.findAll({
    include: Country,
  });
  console.log("retorno actividad");
  return activities;
}

module.exports = allActivities