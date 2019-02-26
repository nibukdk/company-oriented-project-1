const express = require("express"),
  router = express.Router();

router.get("/", (req, res) => {
  res.send("Connected to client");
});

module.exports = router;
