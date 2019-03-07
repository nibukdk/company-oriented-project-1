import React, { Component } from "react";
import WithClass from "../../../HOC/ReactAux";
import Classes from "./movieItem.css";

const movieItem = props => {
  return (
    <WithClass>
      
          {/* <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12"> */}
            <div className={"card ".concat(Classes.Movie_Item_Card)}>
              <h5 className="card-header">{props.title}</h5>
              <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">{props.description}</p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          
      {/* </div> */}
    </WithClass>
  );
};

export default movieItem;
