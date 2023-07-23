const { Router } = require("express");
const getActivity = require("../Controllers/getActivity");
const postActivity = require("../Controllers/postActivity");

const activitiesRouter = Router();

activitiesRouter.get("/", (req, res) => {
  getActivity(req, res);
});

activitiesRouter.post("/", (req, res) => {
    
  postActivity(req, res);
});

module.exports = activitiesRouter;
