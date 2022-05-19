const router = require("express").Router();
const { Track } = require("../../models");
const player = require("../../utils/audioPlayer");

router.get("/play/:id", (req, res) => {
  Track.findOne({
    where: { id: req.params.id },
  })
    .then((dbTrackData) => {
      if (!dbTrackData) {
        console.log("ERROR GETTING TRACK BY  ID");
        res.status(500).json({ message: "No track found with this id" });
      }
      console.log(dbTrackData);
      player.insertNextTrack(dbTrackData.dataValues.path);
      res.status(200);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
