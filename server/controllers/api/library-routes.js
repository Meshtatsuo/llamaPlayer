const { Artist, Album, Track } = require("../../models");
const { addLibrary, scanDirectory } = require("../../utils/libraryManager");

const router = require("express").Router();

router.post("/new", ({ body }, res) => {
  const dir = body.data;
  addLibrary(dir);
  res.status(200).json({ message: "Successful Post" });
});

module.exports = router;
