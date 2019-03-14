import React, { Component } from "react";
import Classes from "./headers.css";
import WithClass from "../../HOC/ReactAux";
import NavContainer from "../../components/Nav/nav";
import Carousel from "../../components/carousel/carousel";
import axios from "axios";

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
      <WithClass className="col-lg-12 col-md-12 col-xs-12 col-sm-12">
        <NavContainer />
        <Carousel carouselMovies={this.state.carouselMovies} />
      </WithClass>
    );
  }
}

export default Headers;
