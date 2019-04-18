import React from "react";
import Classes from "./carousel.css";
import Carousel from "react-bootstrap/Carousel";
import Image from "react-bootstrap/Image";

const carousel = props => {
  let carousel = <p>NO Recent Upload</p>;
  if (props.carouselMovies) {
    carousel = (
      <Carousel className={Classes.Header_Carousel}>
        {props.carouselMovies.map(movie => (
          <Carousel.Item key={movie._id}>
            <Image
              src={movie.image_url}
              alt={movie.title}
              className={Classes.Image}
            />
            <Carousel.Caption>
              <h3> {movie.title} </h3>
              <p>{movie.description} </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    );
  }
  return carousel;
};

export default carousel;
