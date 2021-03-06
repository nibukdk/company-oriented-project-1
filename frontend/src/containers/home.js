import React, { Component } from "react";
import { Route } from "react-router-dom";
import Classes from "./home.css";
import Headers from "./Headers/headers";
import Main from "./Main/main";
import Footers from "./Footers/footers";
import Login from "../components/auth/Login/login";
import Register from "../components/auth/Register/register";
import MovieWatch from "../components/MovieWatch/movieWatch";
import { Container, Row, Col } from "react-bootstrap";
import EditMovie from "../components/Movie/EditMovie/editMovie";
import AddMovie from "../components/Movie/AddMovie/addMovie";
class Home extends Component {
  render() {
    return (
      <Container fluid="true">
        <Row>
          <Col lg={12} className={Classes.Navbar}>
            <Headers />
          </Col>
          <Col lg={12} className={Classes.Main}>
            <Route path="/" exact component={Main} />
            <Route path="/watch-movie/:id" exact component={MovieWatch} />
            <Route path="/movies/edit-movie/:id" exact component={EditMovie} />
            <Route path="/login" exact component={Login} />
            <Route path="/register" exact component={Register} />
            <Route path="/movies/new-movie" exact component={AddMovie} />
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
