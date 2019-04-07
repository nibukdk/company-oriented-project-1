const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose"),
  Schema = mongoose.Schema,
  bcrypt = require("bcryptjs");
//Create UserSchema
const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String
  },
  //Email
  email: {
    type: String,
    required: true
  },
  //Define User role
  user_role: {
    type: String,
    default: "normal",
    enum: ["normal", "admin", "super-admin"]
  },
  //Register date
  registered_date: {
    type: Date,
    required: true
  },
  //when was user last logged in
  last_logged_in: {
    type: Date,
    default: Date.now
  }
});

userSchema.plugin(passportLocalMongoose);

const User = mongoose.model("users", userSchema);

module.exports = User;

//Find User by userid
module.exports.getByUserId = (id, cb) => {
  User.findById(id, cb);
};

//Find User by username

module.exports.getByUserName = (username, cb) => {
  const query = {
    username: username
  };
  User.findOne(query, cb);
};

//Register user
module.exports.addUser = (newUser, cb) => {
  //Hashing the password
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      //Save the new user
      newUser.save(cb);
    });
  });
};

//Compare the given password and given password
module.exports.comparePassword = (typedPassword, hash, cb) => {
  bcrypt.compare(typedPassword, hash, (err, isMatched) => {
    if (err) {
      throw err;
    }
    return cb(null, isMatched);
  });
};
