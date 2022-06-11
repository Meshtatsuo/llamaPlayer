const router = require("express").Router();

router.get("/play/:id", (req, res) => {
  console.log("GET TRACK BY ID: " + req.body.id);
  res.send("Track by ID");
  res.render("hompage");
});

module.exports = router;
