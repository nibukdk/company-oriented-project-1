const express = require("express"),
  router = express.Router();

// Model Import
const User = require("../../models/user");

//Get current user
router.use((req, res, next) => {
  res.locals.user = req.user;
  next();
});

//Import Vaidation
const validateRegisterInput = require("../../validation/registerValidation");

//Register Route
// /register
router.get("/", (req, res) => {
  res.status(200).json({ msg: "This is register route" });
});

//Normal Register Post -> When admin registratoin is not possible

router.post("/", (req, res) => {
  const { isValid, errors } = validateRegisterInput(req.body);
  if (isValid) {
    User.findOne({ email: req.body.email }).then(user => {
      if (user) {
        return res.status(400).json({ error: "Email already exists" });
      }
      User.findOne({ username: req.body.username }).then(user => {
        if (user) {
          return res.status(400).json({ error: "Username already exists" });
        }
        const password = req.body.password;
        //New User Object
        const newUser = new User({
          name: req.body.name,
          username: req.body.username,
          email: req.body.email,
          name: req.body.name,
          password: password,
          registered_date: Date.now()
        });
        //Fetch AddUser method from user.js  in models
        User.addUser(newUser, (err, usr) => {
          if (err) {
            return res.status(400).json({
              err
            });
          }
          return res.status(200).json(usr);
        });
      });
    });
  } else {
    res.status(400).json(errors);
  }
});

//Register By admin
//Providing Roles LIke admin, superadmin, normal and so on

module.exports = router;
