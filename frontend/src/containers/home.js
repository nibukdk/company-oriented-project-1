import React, { Component } from "react";
import { Route } from "react-router-dom";
import Classes from "./home.css";
import Headers from "./Headers/headers";
import Main from "./Main/main";
import Footers from "./Footers/footers";
import Login from "../components/auth/Login/login";
import Register from "../components/auth/Register/register";

import { Container, Row, Col } from "react-bootstrap";

import WithClass from "../HOC/ReactAux";

class Home extends Component {
  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col lg={12}>
            <Headers />
          </Col>
          <Col lg={12}>
            <Route path="/" exact component={Main} />
            {/* <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} /> */}
          </Col>
          <Col lg={12}>
            <Footers />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
