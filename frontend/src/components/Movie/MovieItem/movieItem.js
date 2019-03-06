import React, { Component } from "react";
import WithClass from "../../../HOC/ReactAux";
import Classes from "./movieItem.css";

const movieItem = props => {
  return (
    <WithClass>
      <div className="card">
        <h5 className="card-header">Movies</h5>
        <div className={"cards ".concat(Classes.Movie_cards)}>
          <h5 className="card-header">Featured</h5>
          <div className="card-body">
            <h5 className="card-title">Special title treatment</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </WithClass>
  );
};

export default movieItem;
