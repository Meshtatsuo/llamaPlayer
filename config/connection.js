const Sequelize = require("sequelize");
require("dotenv").config();
let sequelize;

sequelize = new Sequelize(process.env.DB, process.env.USER, process.env.PW, {
  host: "localhost",
  dialect: "sqlite",
  port: 3306,
});

module.exports = sequelize;
