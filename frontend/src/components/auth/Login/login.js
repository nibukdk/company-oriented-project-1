import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Classes from "./login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import { login_user } from "../../../redux/actions/authAction";
class Login extends Component {
  state = {
    userInfo: {
      username: {
        attrs: {
          elType: "text",
          elName: "username",
          className: "form-control",
          placeholder: "Username"
        },
        value: ""
      },

      password: {
        attrs: {
          elType: "password",
          elName: "password1",
          className: "form-control",
          placeholder: "Password"
        },
        value: ""
      }
    },
    errors: {}
  };
  // //Prevent to go to login if already logged in
  // componentDidMount(){
  //   if(this.props.auth.isAuthenticated){
  //     this.props.history.push('/')
  //   }
  // }

  componentWillReceiveProps(nextProps) {
    //Check if user is logged in and if so redirect to homepage
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/");
    }
    //Check if theres error, if so set errors
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
  onLoginSubmitHandler = e => {
    e.preventDefault();
    const { errors } = this.state;
    const newUser = {
      username: this.state.userInfo.username.value,
      password: this.state.userInfo.password.value
    };
    //Call login_user action
    this.props.login_user(newUser);

    
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
            className={elem.className}
            elValue={elem.setup.value}
            placeholder={elem.setup.attrs.placeholder}
            changed={e => this.inputChangeHandler(e, elem.id)}
            errors={this.state.errors}
          />
        ))}
        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>
    );
  }
}
Login.propTypes = {
  login_user: PropTypes.func.isRequired,
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
  { login_user }
)(Login);
