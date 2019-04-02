import React, { Component } from "react";

import Home from "./containers/home";
import WithClass from "./HOC/ReactAux";
import { withRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <WithClass>
        <Home />
      </WithClass>
    );
  }
}

export default withRouter(App);
