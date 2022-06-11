const { Artist, Album, Track } = require("../../models");

const router = require("express").Router();

router.get("/:id", ({ params }, res) => {
  let artists;
  let albums;
  let tracks;
  // Get all artists for main table
  Artist.findAll({})
    .then((dbArtistData) => {
      if (!dbArtistData) {
        console.log("No artists found.");
        res.redirect("/");
      }
      artists = dbArtistData.map((artist) => artist.get({ plain: true }));
      // Find artist of selected album
      Album.findOne({
        where: { id: params.id },
      }).then((dbAlbumData) => {
        if (!dbAlbumData) {
          console.log("Could not find album");
          res.redirect("/");
        }
        Album.findAll({
          where: { artist_id: dbAlbumData.artist_id },
        }).then((result) => {
          if (!result) {
            console.log("Error finding albums");
            res.redirect("/");
          }
          albums = result.map((album) => album.get({ plain: true }));
          Track.findAll({
            where: { album_id: dbAlbumData.id },
          }).then((dbTrackData) => {
            if (!dbTrackData) {
              console.log("No tracks with this album!");
              res.redirect("/");
            }
            tracks = dbTrackData.map((track) => track.get({ plain: true }));
            res.render("homepage", {
              artists,
              albums,
              tracks,
            });
          });
        });
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
