import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Classes from "./movieWatch.css";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";
import { connect } from "react-redux";
class movieWatch extends Component {
  //Prevent to go to movieWatch If user is not logged in
  componentDidMount() {
    if (!this.props.auth.isAuthenticated) {
      this.props.history.push("/login");
    }
  }
  render() {
    return (
      <Container className={Classes.Movie}>
        <Row>
          <Col lg={9} className={Classes.MovieFrame}>
            <ResponsiveEmbed aspectRatio="21by9">
              <iframe
                src={
                  "https://www.youtube.com/embed/" + this.props.match.params.id
                }
              />
            </ResponsiveEmbed>
          </Col>
          <Col lg={3} className="text-info">
            Recommmendation Column to Be Filled
          </Col>
        </Row>
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};

export default connect(
  mapStateToProps,
  {}
)(movieWatch);
