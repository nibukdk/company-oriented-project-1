import { SET_CURRENT_USER } from "../actions/types";
import isEmpty from "../../validation/isEmpty";

const initState = {
  isAuthenticated: false,
  user: {}
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
