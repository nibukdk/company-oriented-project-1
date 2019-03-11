import React from "react";
import WithClass from "../../HOC/ReactAux";
import { Route, Link } from "react-router-dom";
import Classes from "./carousel.css";

const carousel = props => {
  let carousel = <p>NO Recent Upload</p>;
  if (props.carouselMovies) {
    carousel = (
      <div className={Classes.Header_Carousel}>
        <div className="bd-example">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-ride="carousel"
          >
            <ol className="carousel-indicators">
              <li
                data-target="#carouselExampleCaptions"
                data-slide-to="0"
                className="active"
              />
              <li data-target="#carouselExampleCaptions" data-slide-to="1" />
              <li data-target="#carouselExampleCaptions" data-slide-to="2" />
            </ol>
            <div className="carousel-inner">
              {props.carouselMovies.map(movie => (
                <div className="carousel-item active" key={movie._id}>
                  <img src={movie.image_url} />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>{movie.title}</h5>
                    <p className="text-truncate">{movie.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <a
              className="carousel-control-prev"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </a>
            <a
              className="carousel-control-next"
              href="#carouselExampleCaptions"
              role="button"
              data-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
  return <WithClass>{carousel}</WithClass>;
};

export default carousel;
