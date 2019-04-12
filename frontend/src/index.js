import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";

import setAuthToken from "./utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { setCurrentUser } from "./redux/actions/authAction";

//Check if token exists

if (localStorage.JwtToken) {
  //Set AuthToken header
  setAuthToken(localStorage.JwtToken);
  //Decode user info and expiration
  const decoded = jwt_decode(localStorage.JwtToken);
  //Set user and isauthenticated
  store.dispatch(setCurrentUser(decoded));
}

//App state store from redux and pass reducer

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
