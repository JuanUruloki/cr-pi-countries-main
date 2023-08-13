const { Country, Activity } = require("../db");

const allActivities =async ()=>{
const activities = await Activity.findAll({
    include: Country,
  });
 
  return activities;
}

module.exports = allActivities