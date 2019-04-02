import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Classes from "./register.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Row, Col } from "react-bootstrap";

import axios from "axios";
class Register extends Component {
  state = {
    userInfo: {
      name: {
        attrs: {
          elType: "text",
          elName: "name",
          divClass: "form-group",
          className: "form-control"
        },
        value: ""
      },
      username: {
        attrs: {
          elType: "text",
          elName: "username",
          divClass: "form-group",
          className: "form-control"
        },
        value: ""
      },
      email: {
        attrs: {
          elType: "text",
          elName: "email",
          divClass: "form-group",
          className: "form-control"
        },
        value: ""
      },
      password1: {
        attrs: {
          elType: "password",
          elName: "password1",
          divClass: "form-group",
          className: "form-control"
        },
        value: ""
      },
      password2: {
        attrs: {
          elType: "password",
          elName: "password2",
          divClass: "form-group",
          className: "form-control"
        },
        value: ""
      }
    }
  };

  inputChangeHandler = (e, id) => {
    const newUserInfo = { ...this.state.userInfo };
    const element = { ...newUserInfo[id] };
    element.value = e.target.value;
    newUserInfo[id] = element;
    this.setState({ userInfo: newUserInfo });
  };
  onRegisterSubmitHandler = e => {
    e.preventDefault();
    let pass1 = this.state.userInfo.password1.value,
      pass2 = this.state.userInfo.password2.value;

    // if (pass1 !== pass2) {
    // }
    const newUser = {
      name: this.state.userInfo.name.value,
      username: this.state.userInfo.username.value,
      password: this.state.userInfo.password1.value,
      password2: this.state.userInfo.password2.value,
      email: this.state.userInfo.email.value
    };
    axios
      .post("/register", newUser)
      .then(res => (
        <div>{this.props.history.push("/")}</div> //Redirect to home page after successful registration
      ))
      .catch(err => console.log(<Alert variant="danger">{err}</Alert>));
  };

  render() {
    let registerForm = [];
    for (let key in this.state.userInfo) {
      registerForm.push({
        id: key,
        setup: this.state.userInfo[key]
      });
    }
    // console.log(registerForm);
    return (
      <Form
        className={"justify-content-center ".concat(Classes.Form)}
        onSubmit={e => this.onRegisterSubmitHandler(e)}
      >
        {registerForm.map(elem => (
          <Input
            key={elem.id}
            elType={elem.setup.attrs.elType}
            elName={elem.id}
            divClass="form-group"
            className="form-control"
            elValue={elem.setup.value}
            changed={e => this.inputChangeHandler(e, elem.id)}
          />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

export default Register;
