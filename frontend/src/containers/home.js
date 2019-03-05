import React, { Component } from "react";
import Classes from "./home.css";
import Headers from "./Headers/headers";
import Main from "./Main/main";
import Footers from "./Footers/footers";

import WithClass from "../HOC/ReactAux";

class Home extends Component {
  render() {
    return (
      <WithClass>
        <Headers />
        <Main />
        <Footers />
      </WithClass>
    );
  }
}

export default Home;
