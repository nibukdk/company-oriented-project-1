import React, { Component } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Classes from "./movieWatch.css";
import ResponsiveEmbed from "react-bootstrap/ResponsiveEmbed";

class movieWatch extends Component {
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
          <Col lg={3}>hahflaz</Col>
        </Row>
      </Container>
    );
  }
}

export default movieWatch;
