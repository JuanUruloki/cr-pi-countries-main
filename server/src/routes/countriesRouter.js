const { Router } = require("express");
const getCountryById = require("../Handlers/getCountryById.js");
const getCountry = require("../Handlers/getCountry.js");


const countriesRouter = Router();

countriesRouter.get("/", getCountry);

countriesRouter.get("/:id", getCountryById);



module.exports = countriesRouter;
