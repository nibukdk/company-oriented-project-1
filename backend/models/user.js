const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose"),
  Schema = mongoose.Schema;
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
