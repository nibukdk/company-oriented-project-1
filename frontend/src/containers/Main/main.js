import React, { Component } from "react";
import WithClass from "../../HOC/ReactAux";
import Classes from "./main.css";
import axios from "axios";
//Import Inner COmponents
import FilterGenre from "../../components/FilterGenre/filter";
import TopPicks from "../../components/TopPicks/topPicks";
import Movie from "../../components/Movie/movie";
// import axios from "../../axiosConfig";

class Main extends Component {
  state = {
    movie: [],
    hasMovie: false,
    topPicks: []
  };

  componentDidMount() {
    axios
      .get("/home")
      .then(movies => {
        const newState = { ...this.state };
        newState.movie = [...movies["data"]];
        newState.hasMovie = true;
        let i = 0;
        while (newState.topPicks.length <= 5) {
          newState.topPicks.push(movies.data[i]);

          i++;
        }
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
          <div className="col-12 ">
            <FilterGenre />
          </div>
          <div className="col-lg-10 col-7">{MovieList} </div>
          <div className="col-lg-2 col-5">
            <TopPicks topPicks={this.state.topPicks} />
          </div>
        </div>
      </WithClass>
    );
  }
}

export default Main;
