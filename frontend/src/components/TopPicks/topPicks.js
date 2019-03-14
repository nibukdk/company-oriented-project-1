import React, { Component } from "react";
import WithClass from "../../HOC/ReactAux";
import Classes from "./topPicks.css";
class TopPicks extends Component {
  state = {
    topMoviePicks: this.props.topPicks
  };

  render() {
    let topMovies = <p>No TopPicks Available</p>;
    if (this.state.topMoviePicks) {
      topMovies = (
        <div className={"card ".concat(Classes.TopPicks_Card)}>
          <div className="card-header">TOP PICKS</div>
          <ul className="list-group list-group-flush">
            {this.state.topMoviePicks.map(movie => (
              <li key={movie._id} className="list-group-item">
                <img
                  src={movie.image_url}
                  className={"img-responsive ".concat(Classes.Image)}
                  alt={movie.title}
                />
                {movie.title}
              </li>
            ))}
          </ul>
        </div>
      );
    }
    return <WithClass>{topMovies}</WithClass>;
  }
}

export default TopPicks;
