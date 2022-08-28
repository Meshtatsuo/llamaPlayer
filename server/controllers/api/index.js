const router = require("express").Router();

const artistRoutes = require("./artist-routes");
const albumRoutes = require("./album-routes");
const trackRoutes = require("./track-routes");
const libRoutes = require("./library-routes");

router.use("/albums", albumRoutes);
router.use("/artists", artistRoutes);
router.use("/tracks", trackRoutes);
router.use("/lib", libRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
