const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");

router.get("/", (req, res) => {
  console.log("You are here");
});

router.get("/updateLibrary", (req, res) => {
  console.log("Update library!");
});

module.exports = router;
