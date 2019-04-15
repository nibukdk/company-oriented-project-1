import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Classes from "./register.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import {withRouter} from "react-router-dom";
// import Alert from "react-bootstrap/Alert";
// import { Row, Col } from "react-bootstrap";

import { connect } from "react-redux";
import { register_user } from "../../../redux/actions/authAction";

class Register extends Component {
  state = {
    userInfo: {
      name: {
        attrs: {
          elType: "text",
          elName: "name",
          className: "form-control",
          placeholder: "Full Name"
        },
        value: ""
      },
      username: {
        attrs: {
          elType: "text",
          elName: "username",
          className: "form-control",
          placeholder: "Username"
        },
        value: ""
      },
      email: {
        attrs: {
          elType: "text",
          elName: "email",
          className: "form-control",
          placeholder: "Email"
        },
        value: ""
      },
      password1: {
        attrs: {
          elType: "password",
          elName: "password1",
          className: "form-control",
          placeholder: "Password"
        },
        value: ""
      },
      password2: {
        attrs: {
          elType: "password",
          elName: "password2",
          className: "form-control invalid",
          placeholder: "Confirm Password"
        },
        value: ""
      }
    },
    errors: {}
  };

  //Prevent to go to login if already logged in
  componentDidMount(){
    if(this.props.auth.isAuthenticated){
      this.props.history.push('/')
    }
  }



  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
  }
  inputChangeHandler = (e, id) => {
    const newUserInfo = { ...this.state.userInfo };
    const element = { ...newUserInfo[id] };
    element.value = e.target.value;
    newUserInfo[id] = element;
    this.setState({ userInfo: newUserInfo });
  };
  onRegisterSubmitHandler = e => {
    e.preventDefault();
    const newUser = {
      name: this.state.userInfo.name.value,
      username: this.state.userInfo.username.value,
      password: this.state.userInfo.password1.value,
      password2: this.state.userInfo.password2.value,
      email: this.state.userInfo.email.value
    };
    this.props.register_user(newUser,this.props.history);
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
            className={elem.className}
            elValue={elem.setup.value}
            placeholder={elem.setup.attrs.placeholder}
            changed={e => this.inputChangeHandler(e, elem.id)}
            errors={this.state.errors}
          />
        ))}
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );
  }
}

Register.propTypes = {
  register_user: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  return {
    auth: state.auth,
    errors: state.errors
  };
};

export default connect(
  mapStateToProps,
  { register_user }
)(Register);
