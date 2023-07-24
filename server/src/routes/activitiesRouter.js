const { Router } = require("express");
const getActivity = require("../Handlers/getActivity");
const postActivity = require("../Handlers/postActivity");
const validateActivity = require("../Utils/validate")

const activitiesRouter = Router();

activitiesRouter.get("/", getActivity);

activitiesRouter.post("/", validateActivity, postActivity);

module.exports = activitiesRouter;
