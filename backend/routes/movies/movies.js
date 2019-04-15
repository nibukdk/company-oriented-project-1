const express = require("express"),
  router = express.Router(),
  passport = require("passport");

const validateMovieInput = require("../../validation/movie");

const Movie = require("../../models/movie");

// router.use((req, res, next) => {
//   res.locals.user = req.user;
//   next();
// });
router.get("/", (req, res) => {
  res.status(200).send("Movie Page");
});
//Upload New Movies
router.post(
  "/new-movie",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const { errors, isValid } = validateMovieInput(req.body);
    console.log(req.body);
    if (isValid) {
      const newMovie = {};
      (newMovie.title = req.body.title),
        (newMovie.genre = req.body.genre.split(",")),
        (newMovie.description = req.body.description),
        (newMovie.source_id = req.body.source_id),
        (newMovie.image_url = req.body.image_url),
        (newMovie.uploaded_date = Date.now()),
        (newMovie.released_date = req.body.released_date),
        (newMovie.uploaded_by = req.body.uploaded_by);

      Movie.create(newMovie)
        .then(movie => {
          res.status(200).json(movie);
        })
        .catch(err => res.status(400).json(err));
    } else {
      res.status(400).json(errors);
    }
  }
);

//Edit Movie
router.get("/edit-movie/:id", (req, res) => {
  Movie.findById(req.params.id)
    .then(movie => {
      res.status(200).json(movie);
    })
    .catch(err => res.status(400).json(err));
});

router.put("/edit-movie/:id", (req, res) => {
  const { errors, isValid } = validateMovieInput(req.body);

  if (isValid) {
    const updatedMovie = {};
    (updatedMovie.title = req.body.title),
      (updatedMovie.genre = req.body.genre.split(",")),
      (updatedMovie.description = req.body.description),
      (updatedMovie.source_id = req.body.source_id),
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
