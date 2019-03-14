import React from "react";
// import WithClass from "../../../HOC/ReactAux";
import Classes from "./movieItem.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

const movieItem = props => {
  return (
    // <WithClass className="col-3 col-xs-12">
    //   <div
    //     className={"card  text-center border-secondary  ".concat(
    //       Classes.Movie_Item_Card
    //     )}
    //     style={{ width: 18 + "rem" }}
    //   >
    //     <img className="card-img-top" src={props.img} alt={props.title} />
    //     <div className="card-body">
    //       <h5 className="card-title">Movie Name</h5>
    //       <p className="card-text text-truncate">{props.desc}</p>
    //       <p className="card-text">{props.genre}</p>
    //     </div>
    //     <div className="card-body">
    //       <a href={props.source_url} className="card-link">
    //         Watch Movie
    //       </a>
    //     </div>
    //     <div className="card-footer footer-dark">
    //       <p>{props.upload_date.slice(0, 10)}</p>
    //       <p>{props.uploaded_by}</p>
    //     </div>
    //   </div>
    // </WithClass>
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

          <Card.Link href={props.source_url}>Card Link</Card.Link>
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
