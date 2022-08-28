const { Artist, Album, Track } = require("../../models");
const { addLibrary, scanDirectory } = require("../../utils/libraryManager");

const router = require("express").Router();

router.post("/new", ({ body }, res) => {
  console.log(body);
  res.status(200).json({ message: "Successful Post" });
});

module.exports = router;
