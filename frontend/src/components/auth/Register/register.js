import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Classes from "./register.css";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

class Register extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
      // <form className={Classes.Form}>
      //   <Input
      //     elType="text"
      //     elName="name"
      //     divClass="form-group"
      //     className="form-control"
      //   />
      // </form>
    );
  }
}

export default Register;
