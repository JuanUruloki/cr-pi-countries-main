const allActivities = require("../Controllers/allActivities");

const getActivity = async (req, res) => {
  try {
    const activities = await allActivities();
    return res.status(200).json(activities);
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

module.exports = getActivity;
