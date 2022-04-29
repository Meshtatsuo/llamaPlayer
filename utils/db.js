const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");
const { Album, Artist, Track } = require("../models");
const { resolve } = require("path");
const { getAttributes } = require("../models/Artist");

// checks db for existing album
async function albumExists(albumName) {
  Album.findOne({ where: { title: albumName } }).then((result) => {
    if (!result) {
      resolve(false);
    }
    // if album exists return its ID to be used as the foreign key id
    resolve({
      album_id: result.id,
    });
  });
}

// checks db for existing artist
async function artistExists(artistName) {
  Artist.findOne({
    where: {
      artist_name: artistName,
    },
    attributes: ["id", "artist_name"],
  })
    .then((result) => {
      if (!result) {
        console.log("No artist found");
      } else {
        console.log(result);
      }
    })
    .catch((err) => {
      console.log(err);
    });
}
