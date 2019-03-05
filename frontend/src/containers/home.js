import React, { Component } from "react";
import Classes from "./home.css";
import Headers from "./Headers/headers";
import Main from "./Main/main";
import Footers from "./Footers/footers";

class Home extends Component {
  render() {
    return (
      <div>
        <Headers />
        <Main />
        <Footers />
      </div>
    );
  }
}

export default Home;
