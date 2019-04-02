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
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          errors.email = "Email already exists";
          return res.status(400).json({ msg: errors.email });
        } else {
          User.findOne({ username: req.body.username })
            .then(user => {
              if (user) {
                errors.username = "Username already exists";
                return res.status(400).json({ msg: errors.username });
              } else {
                console.log(req.body);
                const password = req.body.password;
                const newUser = new User({
                  name: req.body.name,
                  username: req.body.username,
                  email: req.body.email,
                  registered_date: Date.now()
                });
                //Register new User
                User.register(newUser, password, (err, newUser) => {
                  if (err) {
                    return res.status(400).json(err);
                  }
                  console.log(req.user);
                  return res
                    .status(200)
                    .json({ success: "User Is Registered" });
                });
              }
            })
            .catch(err => {
              res.status(400).json(err);
            });
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  } else {
    res.status(200).json(errors);
  }
});

//Register By admin
//Providing Roles LIke admin, superadmin, normal and so on

module.exports = router;
