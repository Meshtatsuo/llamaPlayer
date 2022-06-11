const router = require("express").Router();
const { Artist, Album, Track } = require("../../models");

router.get("/:id", ({ params }, res) => {
  let artists;
  let albums;
  let tracks;

  Artist.findAll({})
    .then((dbArtistData) => {
      if (!dbArtistData) {
        // redirect back home if it fails
        console.log("No artist found");
        res.redirect("/");
      }
      artists = dbArtistData.map((artist) => artist.get({ plain: true }));
      Album.findAll({
        where: { artist_id: params.id },
      })
        .then((dbAlbumData) => {
          if (!dbAlbumData) {
            console.log("No Albums Found");
          }
          console.log(dbAlbumData);
          albums = dbAlbumData.map((album) => album.get({ plain: true }));
          Track.findAll({
            where: { artist_id: params.id },
          })
            .then((dbTrackData) => {
              if (!dbTrackData) {
                console.log("No tracks found");
              }
              console.log();
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
