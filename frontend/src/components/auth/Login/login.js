import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Classes from "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";

import axios from "axios";
class Login extends Component {
  state = {
    userInfo: {
      username: {
        attrs: {
          elType: "text",
          elName: "username",
          divClass: "form-group",
          className: "form-control"
        },
        value: ""
      },

      password: {
        attrs: {
          elType: "password",
          elName: "password1",
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
  onLoginSubmitHandler = e => {
    e.preventDefault();

    const newUser = {
      username: this.state.userInfo.username.value,
      password: this.state.userInfo.password.value
    };

    axios
      .post("/login", newUser)
      .then(res =>
        // <div>{this.props.history.push("/")}</div> //Redirect to home page after successful registration
        console.log({ response: res })
      )
      .catch(err => console.log({ Error: err }));
  };

  render() {
    let loginForm = [];
    for (let key in this.state.userInfo) {
      loginForm.push({
        id: key,
        setup: this.state.userInfo[key]
      });
    }
    // console.log(loginForm);
    return (
      <Form
        className={"justify-content-center ".concat(Classes.Form)}
        onSubmit={e => this.onLoginSubmitHandler(e)}
      >
        {loginForm.map(elem => (
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
          Login
        </Button>
      </Form>
    );
  }
}

export default Login;
