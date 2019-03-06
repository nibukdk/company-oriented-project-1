import React, { Component } from "react";
import MovieItem from "./MovieItem/movieItem";
import WithClass from "../../HOC/ReactAux";

class Movie extends Component {
    state= {
        movie:null
    }

  render() {
    return (
      <WithClass>
        <MovieItem />
      </WithClass>
    );
  }
}

export default Movie;
