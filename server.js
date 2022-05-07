const express = require("express");
const app = express();
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const db = require("./utils/db");
const library = require("./utils/libraryManager");

const path = require("path");

//TESTING ONLY
const test = require("./utils/db");
const seed = require("./seeds/index");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 6969;

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
app.set(
  "views",
  path.join(__dirname, "/views") || path.join(__dirname, "/resources/app/views")
);

app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// turn on routes
app.use(routes);

async function initServer() {
  return new Promise((resolve) => {
    // turn on connection to db and server
    sequelize
      .sync({
        force: false,
      })
      .then(() => {
        app.listen(PORT, () => console.log("Now listening"));
        resolve(true);
      })
      .catch((err) => {
        console.log(err);
        resolve(err);
      });
  });
}

module.exports = {
  initServer,
};
