const router = require("express").Router();

router.get("/:id", (req, res) => {
  console.log("GET ALBUM BY ID: " + req.body.id);

  res.render("hompage");
});

module.exports = router;
