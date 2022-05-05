const router = require("express").Router();
const sequelize = require("../config/connection");
const path = require("path");
const { Album, Artist, Track } = require("../models");

router.get("/", (req, res) => {
  let artists;
  let albums;
  let tracks;

  // find and set artist data
  Artist.findAll({
    attributes: ["artist_name"],
  })
    .then((dbArtistData) => {
      artists = dbArtistData.map((artist) =>
        artist.get({
          plain: true,
        })
      );
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
  // find and set album data
  Album.findAll({
    attributes: ["title"],
  })
    .then((dbAlbumData) => {
      albums = dbAlbumData.map((album) => album.get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });

  Track.findAll({
    attributes: ["title", "duration"],
  })
    .then((dbTrackData) => {
      tracks = dbTrackData.map((track) => track.get({ plain: true }));
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
