import React from "react";
import Form from "react-bootstrap/Form";

const input = props => {
  let inputElement = null,
    nameOfInpType =
      props.elName.charAt(0).toUpperCase() + props.elName.slice(1);
  switch (props.elType) {
    case "text":
      inputElement = (
        <Form.Group controlId="formBasicText">
          <Form.Label>{nameOfInpType}</Form.Label>
          <Form.Control
            type="text"
            placeholder={nameOfInpType}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
        </Form.Group>
      );
      break;

    case "password":
      inputElement = (
        <Form.Group controlId="formBasicPassword">
          <Form.Label> {nameOfInpType} </Form.Label>
          <Form.Control
            type="password"
            placeholder={nameOfInpType}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
        </Form.Group>
      );
      break;
    case "email":
      inputElement = (
        <Form.Group controlId="formBasicEmail">
          <Form.Label> {nameOfInpType} </Form.Label>
          <Form.Control
            type="email"
            placeholder={nameOfInpType}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
        </Form.Group>
      );
      break;
    case "checkbox":
      inputElement = (
        <Form.Group controlId="formBasicCheckbox">
          <Form.Label> {nameOfInpType} </Form.Label>
          <Form.Control
            type="checkbox"
            placeholder={nameOfInpType}
            name={props.elName}
            value={props.elValue}
            onChange={props.changed}
          />
        </Form.Group>
      );
      break;
    case "textarea":
      inputElement = (
        <Form.Group controlId="formBasicTextarea">
          <Form.Label> {nameOfInpType} </Form.Label>
          <Form.Control name={props.elName} onChange={props.changed} rows="3" />
        </Form.Group>
      );
      break;
    default:
      inputElement = null;
  }

  return inputElement;
};

export default input;
