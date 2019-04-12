import { REGISTER_USER } from "../actions/types";

const initState = {
  isAuthenticated: false,
  user: {}
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        user:action.payload
      };

    default:
      return state;
  }
};

export default authReducer;
