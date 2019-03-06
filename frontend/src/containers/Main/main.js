import React, { Component } from "react";
import WithClass from "../../HOC/ReactAux";
import Classes from "./main.css";
import axios from "axios";
import Movie from "../../components/Movie/movie";
// import axios from "../../axiosConfig";

class Main extends Component {
  state = {
    movie: [],
    hasMovie: false
  };

  componentDidMount() {
    axios
      .get("/home")
      .then(movies => {
        let movieList = [...this.state.movie];
        movieList = [...movies["data"]];
        this.setState({ movie: movieList, hasMovie: true });
      })
      .catch(err => console.log(err));
  }

  ListOfMovies = () => {};
  render() {
    let MovieList = <p>There is no movie to fetch</p>;
    if (this.state.hasMovie) {
      MovieList = <Movie movieList={this.state.movie} />;
    }

    return <WithClass>{MovieList}</WithClass>;
  }
}

export default Main;
