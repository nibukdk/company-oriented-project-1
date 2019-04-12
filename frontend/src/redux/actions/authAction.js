import { React, Component } from "react";
import { REGISTER_USER, GET_ERRORS } from "./types";
import axios from "axios";
//Register user
export const register_user = newUser => dispatch => {
  // return {
  //   type: REGISTER_USER,
  //   payload: userData
  // };
  axios
    .post("/register", newUser)
    .then(
      res => <div>{this.props.history.push("/")}</div> //Redirect to home page after successful registration
      // console.log(res.data)
    )
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};
