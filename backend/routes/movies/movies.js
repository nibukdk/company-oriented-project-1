const express = require("express"),
  router = express.Router();

const validateMovieInput = require("../../validation/movie");

const Movie = require("../../models/movie");

//See All Movies
router.get("/", (req, res) => {
  res.send("Connected to movies");
});

//Upload New Movies
router.post("/new-movie", (req, res) => {
  const { errors, isValid } = validateMovieInput(req.body);

  if (isValid) {
    const newMovie = {};
    (newMovie.title = req.body.title),
      (newMovie.genre = req.body.genre.split(",")),
      (newMovie.description = req.body.description),
      (newMovie.source_url = req.body.source_url),
      (newMovie.image_url = req.body.image_url),
      (newMovie.uploaded_date = Date.now()),
      (newMovie.released_date = req.body.released_date);

    Movie.create(newMovie)
      .then(movie => {
        res.status(200).json(movie);
      })
      .catch(err => res.status(400).json(err));
  } else {
    res.status(400).json(errors);
  }
});

//Edit Movie

router.put("/edit/:id", (req, res) => {
  const { errors, isValid } = validateMovieInput(req.body);

  if (isValid) {
    const updatedMovie = {};
    (updatedMovie.title = req.body.title),
      (updatedMovie.genre = req.body.genre.split(",")),
      (updatedMovie.description = req.body.description),
      (updatedMovie.source_url = req.body.source_url),
      (updatedMovie.image_url = req.body.image_url),
      (updatedMovie.uploaded_date = Date.now()),
      (updatedMovie.released_date = req.body.released_date);

    //First Find If the movie exists
    Movie.findById(req.params.id)
      .then(movie => {
        //If movie is found then update it
        if (movie) {
          movie.updateOne(updatedMovie).exec();
          res.send(200).json(updatedMovie);
        }
      })
      .catch(err => {
        res.status(400).json(err);
      });
  } else {
    res.status(400).json(errors);
  }
});
//Delete Moive
router.delete("/delete/:id", (req, res) => {
  Event.findByIdAndRemove(req.params.id)
    .then(success => {
      if (success) {
        res.json(200).json({ msg: "Deleted" });
      }
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

module.exports = router;
