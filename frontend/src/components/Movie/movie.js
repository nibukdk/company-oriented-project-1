import React, { Component } from "react";
import MovieItem from "./MovieItem/movieItem";
import WithClass from "../../HOC/ReactAux";

import Classes from "./movie.css";

class Movie extends Component {
  state = {
    movies: this.props.movieList
  };

  render() {
    console.log(this.state.movies);
    let movieItem = (
      <div className="container">
        <div className="row">
          <p>No movies to Dispaly</p>
        </div>
      </div>
    );
    if (this.state.movies) {
      movieItem = this.state.movies.map(movie => {
        return (
          <MovieItem
            key={movie._id}
            title={movie.title}
            desc={movie.description}
            genre={movie.genre}
            released_date={movie.released_date}
            likes={movie.likes}
            dislikes={movie.dislikes}
            upload_date={movie.upload_date}
            id={movie._id}
            img={movie.image}
          />
        );
      });
    }

    return (
      <WithClass>
        <div className="container">
          <div className="row">{movieItem}</div>
        </div>
      </WithClass>
    );
  }
}

export default Movie;
