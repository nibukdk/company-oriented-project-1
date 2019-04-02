const validator = require("validator"),
  isEmpty = require("./isEmpty");

module.exports = validateRegisterInput = data => {
  let errors = {};
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : "";
  data.username = !isEmpty(data.username) ? data.username : "";
  // data.user_role = !isEmpty(data.user_role) ? data.user_role : "";

  // let user_role = data.user_role;
  // let isOnList = null;

  // //Switch user user_user_role checking is its on the list of user_user_roles
  // switch (user_role) {
  //   case "normal":
  //     isOnList = true;
  //     break;
  //   case "admin":
  //     isOnList = true;
  //     break;
  //   case "super-admin":
  //     isOnList = true;
  //     break;
  //   default:
  //     isOnList = false;
  // }

  //Validation for Name field
  if (!validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = "Name must be between 2 to 30 characters.";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }
  //Check for username is empty
  if (validator.isEmpty(data.username)) {
    errors.username = "User Name field is required field is required";
  }
  //Check username length
  if (!validator.isLength(data.username, { min: 4, max: 30 })) {
    errors.username = "Username must be between 4 to 30 characters.";
  }
  //Validation for Email Field
  if (!validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  // Validation for Password Field
  if (validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  if (!validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password  must be atleast  6 characters.";
  }
  //Validation for Password confirmation field

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password field is required";
  }
  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords do not match";
  }

  // //Check user role empty or not
  // if (validator.isEmpty(data.user_role)) {
  //   errors.user_role = "User role is required";
  // }
  // // Check user role  validation
  // if (isOnList === false) {
  //   errors.user_role = "Checkout member type";
  // }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
