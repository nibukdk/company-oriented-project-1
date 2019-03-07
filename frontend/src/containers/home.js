import React, { Component } from "react";
import { Route } from "react-router-dom";
import Classes from "./home.css";
import Headers from "./Headers/headers";
import Main from "./Main/main";
import Footers from "./Footers/footers";
import Login from "../components/auth/Login/login";
import Register from "../components/auth/Register/register";

import WithClass from "../HOC/ReactAux";

class Home extends Component {
  render() {
    return (
      <WithClass>
        <Headers />
        <Route path="/" exact component={Main} />
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Footers />
      </WithClass>
    );
  }
}

export default Home;
