import React, { Component } from "react";
import WithClass from "../../HOC/ReactAux";
import Classes from "./topPicks.css";
import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

class TopPicks extends Component {
  state = {
    topMoviePicks: this.props.topPicks
  };

  render() {
    let topMovies = <p>No TopPicks Available</p>;
    if (this.state.topMoviePicks) {
      topMovies = (
        <Card className={"card ".concat(Classes.TopPicks_Card)}>
          <ListGroup variant="flush">
            {this.state.topMoviePicks.map(movie => (
              <ListGroup.Item key={movie._id}>
                <img
                  src={movie.image_url}
                  className={"img-responsive ".concat(Classes.Image)}
                  alt={movie.title}
                />
                {movie.title}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      );
    }
    return <WithClass>{topMovies}</WithClass>;
  }
}

export default TopPicks;
