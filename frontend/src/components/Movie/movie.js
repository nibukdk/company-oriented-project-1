import React, { Component } from "react";
import MovieItem from "./MovieItem/movieItem";
import WithClass from "../../HOC/ReactAux";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

// import Classes from "./movie.css";

class Movie extends Component {
  state = {
    movies: this.props.movieList
  };

  onSourceIdClickedHandler = id => {
    console.log('Cli')
  };
  render() {
    let movieItem = (
      <Container>
        <Row>
          <p>No movies to Dispaly</p>
        </Row>
      </Container>
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
            source_id={movie.source_id}
            uploaded_by={movie.uploaded_by}
            img={movie.image_url}
            clicked={() => this.onSourceIdClickedHandler(movie.source_url)}
          />
        );
      });
    }

    return (
      <Container>
        <Row>{movieItem}
        </Row>
      </Container>
    );
  }
}

export default Movie;
