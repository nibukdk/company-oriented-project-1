import React, { Component } from "react";
import MovieItem from "./MovieItem/movieItem";
import WithClass from "../../HOC/ReactAux";

import Classes from "./movie.css";

class Movie extends Component {
  state = {
    movies: this.props.movieList
  };

  render() {
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
            source_url={movie.source_url}
            uploaded_by={movie.uploaded_by}
            img={movie.image_url}
          />
        );
      });
    }

    return (
      <WithClass>
        <div className="row">{movieItem}</div>
      </WithClass>
    );
  }
}

export default Movie;
