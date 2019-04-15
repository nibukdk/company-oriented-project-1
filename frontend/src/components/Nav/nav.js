import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logout_user } from "../../redux/actions/authAction";
import Classes from "./nav.css";
class Navigation extends Component {
  state = {};
  onLogoutClickHandler = e => {
    e.preventDefault();
    this.props.logout_user();
    window.location.href = "/";
  };
  render() {
    let navLinks = null;
    if (this.props.auth.isAuthenticated) {
      navLinks = (
        <Nav className="mr-auto">
          <Nav.Item>
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/movies/new-movie">
              New Movie
            </Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              className="nav-link"
              onClick={e => this.onLogoutClickHandler(e)}
            >
              Logout
            </Nav.Link>
          </Nav.Item>
        </Nav>
      );
    } else {
      navLinks = (
        <Nav className="mr-auto">
          <Nav.Item>
            <Link className="nav-link" to="/">
              Home <span className="sr-only">(current)</span>
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/login">
              Login
            </Link>
          </Nav.Item>
          <Nav.Item>
            <Link className="nav-link" to="/register">
              Register
            </Link>
          </Nav.Item>
        </Nav>
      );
    }
    return (
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className={Classes.Navbar}
      >
        <Navbar.Brand>
          <Link className="nav-link" to="/">
            Home
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">{navLinks}</Navbar.Collapse>
      </Navbar>
    );
  }
}
Navigation.propTypes = {
  logout_user: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  { logout_user }
)(Navigation);
