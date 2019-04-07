const express = require("express"),
  router = express.Router(),
  User = require("../../models/user.js"),
  passport = require("passport"),
  jwt = require("jsonwebtoken"),
  CONFIG = require("../../config/keys");
const validateLoginInput = require("../../validation/loginValidation");

let passportAuthenticate = passport.authenticate("local", {
  // failureFlash: true
});
router.post("/", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);
  if (isValid) {
    User.getByUserName(req.body.username, (err, user) => {
      if (err) {
        throw err;
      }
      if (!user) {
        return res.json({ success: "false", error: "Username not found" });
      }
      //if found compareUser to regiestred one
      User.comparePassword(
        req.body.password,
        user.password,
        (err, isMatched) => {
          if (err) {
            throw err;
          }
          if (isMatched) {
            const token = jwt.sign(user.toJSON(), CONFIG.secretOrKey, {
              expiresIn: 3600 /*auto Logout in 1 hour*/
            });
            return res.status(200).json({
              success: "true",
              token: "JWT " + token,
              user: user._id,
              email: user.email,
              username: user.username
            });
          }
          return res
            .status(400)
            .json({ success: "false", error: " Password not Matched" });
        }
      );
    });
  } else {
    return res.status(400).json({ success: "false", errors });
  }
});

module.exports = router;
