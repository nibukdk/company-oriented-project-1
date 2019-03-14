import React, { Component } from "react";
// import Classes from "./headers.css";
import WithClass from "../../HOC/ReactAux";
import NavContainer from "../../components/Nav/nav";
import Carousel from "../../components/carousel/carousel";
import axios from "axios";

import { Route } from "react-router-dom";

class Headers extends Component {
  state = {
    carouselMovies: [],
    hasMovie: false
  };
  componentDidMount() {
    axios
      .get("/home")
      .then(movies => {
        const newState = { ...this.state };
        newState.carouselMovies = [...movies["data"]];
        newState.hasMovie = true;
        this.setState(newState);
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <WithClass >
        <NavContainer />
        <Route
          path="/"
          exact
          render={props => (
            <Carousel carouselMovies={this.state.carouselMovies} {...props} />
          )}
        />
      </WithClass>
    );
  }
}

export default Headers;
