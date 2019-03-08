import React, { Component } from "react";
import WithClass from "../../HOC/ReactAux";
import Classes from "./main.css";
import axios from "axios";
//Import Inner COmponents
import FilterGenre from "../../components/FilterGenre/filterGenre";
import TopPicks from "../../components/TopPicks/topPicks";
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
        const newState = { ...this.state };
        newState.movie = [...movies["data"]];
        newState.hasMovie = true;
        // let movieList = [...this.state.movie];
        // movieList = [...movies["data"]];
        // this.setState({ movie: movieList, hasMovie: true });
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }

  // ListOfMovies = () => {};
  render() {
    let MovieList = <p>There is no movie to fetch</p>;
    if (this.state.hasMovie) {
      MovieList = <Movie movieList={this.state.movie} />;
    }

    return (
      <WithClass>
        <div className="row">
          <div className="col-lg-12 col-3">
            <FilterGenre />
          </div>
          <div className="col-lg-10 col-7">{MovieList} </div>
          <div className="col-2">
            <TopPicks />
          </div>
        </div>
      </WithClass>
    );
  }
}

export default Main;
