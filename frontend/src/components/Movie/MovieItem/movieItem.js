import React, { Component } from "react";
import WithClass from "../../../HOC/ReactAux";
import Classes from "./movieItem.css";

const movieItem = props => {
  return (
    <WithClass className="col-3 col-xs-12">
      <div
        className={"card  text-center border-secondary  ".concat(Classes.Movie_Item_Card)}
        style={{ width: 18 + "rem" }}
      >
        <img
          className="card-img-top"
          src="https://i.kinja-img.com/gawker-media/image/upload/s--8l1CI_WC--/c_scale,f_auto,fl_progressive,q_80,w_800/joumqxi8np0phogpo62y.png"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Movie Name</h5>
          <p className="card-text text-truncate">{props.desc}</p>
          <p className="card-text">{props.genre}</p>
        </div>
        <div className="card-body">
          <a href={props.source_url} className="card-link">
            Watch Movie
          </a>
        </div>
        <div className="card-footer footer-dark">
        <p>{props.upload_date.slice(0,10)}</p>
        <p>{props.uploaded_by}</p></div>
      </div>
    </WithClass>
  );
};

export default movieItem;
