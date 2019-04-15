import React, { Component } from "react";
import MovieItem from "./MovieItem/movieItem";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { connect } from "react-redux";
class Movie extends Component {
  state = {
    movies: this.props.movieList,
    user_role: this.props.auth.user.user_role
  };

  // onSourceIdClickedHandler = id => {
  //   console.log('Cli')
  // };
  render() {
    const user_role = this.state.user_role;
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
            objId= {movie._id}
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
            user_role={user_role}
          />
        );
      });
    }

    return (
      <Container>
        <Row>{movieItem}</Row>
      </Container>
    );
  }
}
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  {}
)(Movie);
