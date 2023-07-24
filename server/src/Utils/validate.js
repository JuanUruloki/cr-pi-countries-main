const validateActivity = (req, res, next) => {
  const { name, difficulty, duration, season, countries } = req.body;
  if (!name) return res.status(400).json({ error: "Missing Name"});
  if (!difficulty) return res.status(400).json({ error: "Missing Difficulty"});
  if (!duration) return res.status(400).json({ error: "Missing Duration"});
  if (!season) return res.status(400).json({ error: "Missing Season"});
  if (!countries) return res.status(400).json({ error: "Missing Countries"});

  next();
};

module.exports = validateActivity