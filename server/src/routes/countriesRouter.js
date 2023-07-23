const { Router } = require("express");
const getCountryById = require("../Controllers/getCountryById.js");
const getCountryByName = require("../Controllers/getCountryByName");

const countriesRouter = Router();

countriesRouter.get("/", (req, res) => {
  getCountryByName(req,res);
});

countriesRouter.get("/:id", (req, res) => {
  getCountryById(req,res);
});

countriesRouter.get("/name?='name'", (req, res) => {
  getCountryByName(req,res);
});

module.exports = countriesRouter;
