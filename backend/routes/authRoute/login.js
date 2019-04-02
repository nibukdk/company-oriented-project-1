const express = require("express"),
  router = express.Router(),
  User = require("../../models/user.js"),
  passport = require("passport");
const validateLoginInput = require("../../validation/loginValidation");

let passportAuthenticate = passport.authenticate("local", {
  // failureFlash: true
});
router.post("/", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (isValid) {
    User.findOne({ username: req.body.username })
      .then(user => {
        if (!user) {
          return res.status(400).json({ err: "User is not found" });
        } else {
          console.log(user);
          req.login(user, err => {
            if (err) {
              return res.status(400).json({ err: err });
            }
            return res.status(200).json({ msg: "success", user: req.user });
          });
        }
      })
      .catch(err => console.log(err));
  } else {
    res.json(errors);
  }

  // req.login(user, function(err) {
  //   if (err) {
  //     return res.status(400).json({ err: err });
  //   }
  //   return res.status(200).json({ msg: "success", user: req.user });
  // });
});

module.exports = router;
