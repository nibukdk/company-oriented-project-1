const express = require("express"),
  router = express.Router(),
  User = require("../../models/user.js");
const validateLoginInput = require("../../validation/loginValidation");

//Login Route
router.get("/", (req, res) => {
  res.status(200).json({ msg: "This is login page" });
});

// let passportAuthenticate = passport.authenticate("local", {
//   failureRedirect: "/login"
//   // failureFlash: true
// });

router.post("/", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (isValid) {
    User.findOneAndUpdate(
      { username: req.user },
      { lastLoggedIn: Date.now() },
      (err, result) => {
        if (err) {
          throw err;
        }
      }
    );
  }
});

module.exports = router;
