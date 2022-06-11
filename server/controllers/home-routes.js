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
    attributes: ["id", "artist_name"],
  })
    .then((dbArtistData) => {
      if (!dbArtistData) {
        console.log("No artist data");
      }
      console.log("Artists Found");
      artists = dbArtistData.map((artist) =>
        artist.get({
          plain: true,
        })
      );
      // find and set album data
      Album.findAll({
        attributes: ["id", "title"],
      })
        .then((dbAlbumData) => {
          if (!dbAlbumData) {
            console.log("No album data");
          }
          console.log("Albums Found");
          albums = dbAlbumData.map((album) => album.get({ plain: true }));
          Track.findAll({
            attributes: ["id", "title", "duration"],
          })
            .then((dbTrackData) => {
              if (!dbTrackData) {
                console.log("no tracks found :(");
              }
              console.log("Tracks Found");
              tracks = dbTrackData.map((track) => track.get({ plain: true }));
              res.render("homepage", {
                artists,
                albums,
                tracks,
              });
            })
            .catch((err) => {
              console.log(err);
              res.status(500).json(err);
            });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
