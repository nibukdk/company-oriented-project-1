import React, { Component } from "react";
import WithClass from "../../HOC/ReactAux";
import GenreDropDown from "./Dropdowns/genreDropdown";
import YearDropDown from "./Dropdowns/yearDropdown";

import Classes from "./filter.css";
import Col from "react-bootstrap/Col";
import { Row } from "react-bootstrap";
// import axios from "../../axiosConfig";
class FilterGenre extends Component {
  state = {
    displayGenreDropdown: false,
    displayYearDropdown: false
  };

  //TOggle Genre dropdown
  onSelectDispalyGenreHandler = () => {
    const newState = { ...this.state };
    if (newState.displayGenreDropdown) {
      newState.displayGenreDropdown = false;
    } else {
      newState.displayGenreDropdown = true;
    }
    this.setState(newState);
    console.log(this.state.displayGenreDropdown);
  };

  //Selected Value Genre
  onSelectGenreHandler = e => {
    console.log(e.target.checked);
  };

  //TOggle Year dropdown
  onSelectDispalyYearHandler = prevState => {
    const newState = { ...this.state };
    if (newState.displayYearDropdown) {
      newState.displayYearDropdown = false;
    } else {
      newState.displayYearDropdown = true;
    }
    this.setState(newState);
    console.log(this.state.displayYearDropdown);
  };

  //Selected Value year
  onSelectYearHandler = e => {
    console.log(e.target.checked);
  };

  render() {
    return (
      <Row className={Classes.Filter}>
        <Col lg={4}>
          <GenreDropDown
            genreSelectHandler={() => this.onSelectDispalyGenreHandler}
            displayGenre={this.state.displayGenreDropdown}
            selectGenre={e => this.onSelectGenreHandler}
          />
        </Col>
        <Col lg={4}>
          <YearDropDown
            yearSelectHandler={() => this.onSelectDispalyYearHandler}
            displayYear={this.state.displayYearDropdown}
            selectYear={e => this.onSelectYearHandler}
          />
        </Col>
        <Col lg={4}>
          <button className="btn btn-primary btn-lg"> Filter</button>
        </Col>
      </Row>
    );
  }
}

export default FilterGenre;
