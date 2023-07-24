const { Router } = require("express");
const getCountryById = require("../Handlers/getCountryById.js");
const getCountryByName = require("../Handlers/getCountryByName");

const countriesRouter = Router();

countriesRouter.get("/", getCountryByName);

countriesRouter.get("/:id", getCountryById);

countriesRouter.get("/name?='name'", getCountryByName);

module.exports = countriesRouter;
