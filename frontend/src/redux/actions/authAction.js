import { React, Component } from "react";
import { GET_ERRORS, SET_CURRENT_USER } from "./types";
import axios from "axios";
import setAuthToken from "../../utils/setAuthToken";
import jwt_decode from "jwt-decode";
//Register user
export const register_user = (newUser, history) => dispatch => {
  axios
    .post("/register", newUser)
    .then(res => {
      history.push("/login");
    })
    .catch(err => {
      dispatch({ type: GET_ERRORS, payload: err.response.data });
    });
};

//Login User

export const login_user = userData => dispatch => {
  axios
    .post("/login", userData)
    .then(res => {
      //Extract and save token to local storage
      const { token } = res.data;
      //Set to localstorage
      localStorage.setItem("JwtToken", token);
      //Set token to Auth header as required by jwt strategy
      setAuthToken(token);
      //Decode token to get user data
      const decoded = jwt_decode(token);

      //Set Current User
      dispatch(setCurrentUser(decoded));
    })
    .catch(err => dispatch({ type: GET_ERRORS, payload: err.response.data }));
};
//Logout user
export const logout_user = () => dispatch => {
  //Remove data from 'local storage'
  localStorage.removeItem("JwtToekn");
  //Remove auth header for future login
  setAuthToken(false);
  //Set current user to empty obj, and isAuthenticated to false
  dispatch(setCurrentUser({}));
  // this.props.history.push('/')
};

//Set logged in user

export const setCurrentUser = decoded => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded
  };
};
