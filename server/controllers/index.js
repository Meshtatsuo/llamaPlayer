const router = require("express").Router();

const homeRoutes = require("./home-routes");
const apiRoutes = require("./api");
const settingsRoutes = require("./settings-routes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/settings", settingsRoutes);

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
