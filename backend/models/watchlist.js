const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose"),
  Schema = mongoose.Schema;

const watchListSchema = new Schema({
  //List of movies
  movies: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
      default: "none"
    }
  ],
  //User
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
    default: "none"
  }
});

// watchListSchema.plugin(passportLocalMongoose);

const watchList = mongoose.model("watchlists", watchListSchema);

module.exports = watchList;
