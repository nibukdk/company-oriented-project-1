const mongoose = require("mongoose"),
  passportLocalMongoose = require("passport-local-mongoose"),
  Schema = mongoose.Schema;

//Create MovieSchema
const movieSchema = new Schema({
  //title of movie
  title: {
    type: String,
    required: true
  },
  //genre list for movie
  genre: [
    {
      type: String,
      required: true
    }
  ],

  //Description/Plot of movie
  description: {
    type: String,
    required: true
  },
  //Number of likes
  likes: {
    type: Number,
    default: 0
  },
  //Total number of dislikes
  dislikes: {
    type: Number,
    default: 0
  },

  //Total number of enrolled users
  watched_by: [
    {
      type: Schema.Types.ObjectId,
      ref: "users",
      default: "none"
    }
  ],
  //Id of admin who uploaded it
  uploaded_by: {
    ref: "users",
    type: Schema.Types.ObjectId
  },
  //When was the movie released
  released_date: {
    type: Date
  },
  //When was movie uploaded to this site
  upload_date: {
    type: Date,
    default: Date.now,
    required: true
  }, 
  url:{
    type:String,
    required:true
  }
});

// movieSchema.plugin(passportLocalMongoose);

const Movie = mongoose.model("movies", movieSchema);

module.exports = Movie;
