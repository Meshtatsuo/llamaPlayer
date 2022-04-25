const Sequelize = require('sequelize');
require('dotenv').config();
let sequelize;

sequelize = new Sequelize(process.env.MYSQL_DB, process.env.MYSQL_USER, process.env.MYSQL_PW,{
    host: 'localhost',
    dialect: 'mysql',
    port: 3306
});

module.exports = sequelize;