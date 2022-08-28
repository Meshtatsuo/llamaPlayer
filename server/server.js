const express = require("express");
const app = express();

const db = require("./utils/db");
const library = require("./utils/libraryManager");

const path = require("path");

const routes = require("./controllers");
const sequelize = require("./config/connection");

const PORT = process.env.PORT || 3001;

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
