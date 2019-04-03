const validator = require("validator"),
  isEmpty = require("./isEmpty");

module.exports = validateMovieInput = data => {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.genre = !isEmpty(data.genre) ? data.genre : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  //   data.likes = !isEmpty(data.likes) ? data.likes : "";
  //   data.dislikes = !isEmpty(data.dislikes) ? data.dislikes : "";
  //   data.watched_by = !isEmpty(data.watched_by) ? data.watched_by : "";
  data.uploaded_by = !isEmpty(data.uploaded_by) ? data.uploaded_by : "";
  data.released_date = !isEmpty(data.released_date) ? data.released_date : "";
  data.upload_date = !isEmpty(data.upload_date) ? data.upload_date : "";
  data.source_id = !isEmpty(data.source_id) ? data.source_id : "";
  data.image_url = !isEmpty(data.image_url) ? data.image_url : "";

  //Check for Empty Inputs

  if (validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }

  if (validator.isEmpty(data.genre)) {
    errors.genre = "Genre field is required";
  }
  if (validator.isEmpty(data.description)) {
    errors.description = "description field is required";
  }
  //   if (validator.isEmpty(data.likes)) {
  //     errors.likes = "likes field is required";
  //   }
  //   if (validator.isEmpty(data.dislikes)) {
  //     errors.dislikes = "dislikes field is required";
  //   }
  //   if (validator.isEmpty(data.watched_by)) {
  //     errors.watched_by = "watched_by field is required";
  //   }
  if (validator.isEmpty(data.uploaded_by)) {
    errors.uploaded_by = "uploaded_by field is required";
  }
  if (validator.isEmpty(data.released_date)) {
    errors.released_date = "released_date field is required";
  }
  //   if (validator.isEmpty(data.upload_date)) {
  //     errors.upload_date = "upload_date field is required";
  //   }
  if (validator.isEmpty(data.source_id)) {
    errors.source_id = "source_id field is required";
  }

  // if (!validator.isURL(data.source_id)) {
  //   errors.source_id = "source_id field is invalid";
  // }

  if (validator.isEmpty(data.image_url)) {
    errors.image_url = "image_url field is required";
  }

  if (!validator.isURL(data.image_url)) {
    errors.image_url = "image_url field is invalid";
  }

  return {
    errors: errors,
    isValid: isEmpty(errors)
  };
};
