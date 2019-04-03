import React from "react";
// import WithClass from "../../../HOC/ReactAux";
import Classes from "./movieItem.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Route } from "react-router-dom";
import MovieWatch from "../../MovieWatch/movieWatch";
import { Link } from "react-router-dom";

const movieItem = props => {
  return (
    <Col lg={3}>
     
        <Card
          className={"card  text-center border-secondary  ".concat(
            Classes.Movie_Item_Card
          )}
        >
          <Card.Img variant="top" src={props.img} alt={props.title} />
          <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text className="text-truncate">{props.desc}</Card.Text>
            <Card.Text>{props.genre} </Card.Text>

            <Link to={"/watch-movie/"+props.source_id}>Watch </Link>
    
          </Card.Body>
          <footer className="blockquote-footer">
            <p>{props.upload_date.slice(0, 10)}</p>
            <p>{props.uploaded_by}</p>
          </footer>
        </Card>
     
    </Col>
  );
};

export default movieItem;
