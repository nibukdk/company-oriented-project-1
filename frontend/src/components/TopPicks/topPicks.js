import React, { Component } from "react";
import WithClass from "../../HOC/ReactAux";

class TopPicks extends Component {
  render() {
    return (
      <WithClass>
        <div className="card" style={{ width: 18 + "rem" }}>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
        </div>
      </WithClass>
    );
  }
}

export default TopPicks;
