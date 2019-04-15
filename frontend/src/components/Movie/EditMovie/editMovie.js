import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Classes from "./editMovie.css";
import axios from "axios";
import { connect } from "react-redux";
import PropTypes from "prop-types";

class EditMovie extends Component {
  state = {
    movie: {
      title: {
        attrs: {
          elType: "text",
          elName: "title",
          className: "form-control",
          placeholder: "Title of Movie"
        },
        value: ""
      },
      genre: {
        attrs: {
          elType: "text",
          elName: "genre",
          className: "form-control",
          placeholder: "Genre of Movie"
        },
        value: ""
      },
      source_id: {
        attrs: {
          elType: "text",
          elName: "source_id",
          className: "form-control",
          placeholder: "Id source of Movie"
        },
        value: ""
      },
      description: {
        attrs: {
          elType: "textarea",
          elName: "description",
          className: "form-control",
          placeholder: "Description of Movie"
        },
        value: ""
      },
      image_url: {
        attrs: {
          elType: "text",
          elName: "image_url",
          className: "form-control",
          placeholder: "Image Url of Movie"
        },
        value: ""
      },
      released_date: {
        attrs: {
          elType: "date",
          elName: "released_date",
          className: "form-control",
          placeholder: "Released date of Movie"
        },
        value: ""
      }
    },
    errors: {},
    currentUser: null
    // flashAlert: null
  };

  //On Input Change
  inputChangeHandler = (e, id) => {
    const newMovieInfo = { ...this.state.movie };
    const element = { ...newMovieInfo[id] };
    element.value = e.target.value;
    newMovieInfo[id] = element;
    this.setState({ movie: newMovieInfo });
  };

  componentDidMount() {
    //Prevent to go to movieedit if user is not admin

    if (
      !this.props.auth.isAuthenticated ||
      (this.props.auth.isAuthenticated &&
        this.props.auth.user.user_role !== "admin")
    ) {
      this.props.history.push("/");
    }
    const convert = str => {
      let initDate = str.slice(0, 10),
        date = initDate.split("-"),
        newDate = date.join("-");

      return newDate;
    };

    axios
      .get("/movies/edit-movie/" + this.props.match.params.id)
      .then(res => {
        const newState = { ...this.state };
        newState.movie = { ...this.state.movie };
        newState.movie.title = { ...this.state.movie.title };
        newState.movie.description = { ...this.state.movie.description };
        newState.movie.genre = { ...this.state.movie.genre };
        newState.movie.image_url = { ...this.state.movie.image_url };
        newState.movie.source_id = { ...this.state.movie.source_id };
        newState.movie.released_date = {
          ...this.state.movie.released_date
        };
        //uploaded_by = this.props.auth.user._id;
        newState.currentUser = this.props.auth.user._id;
        newState.movie.title.value = res.data.title;
        newState.movie.genre.value = res.data.genre;
        newState.movie.description.value = res.data.description;
        newState.movie.image_url.value = res.data.image_url;
        newState.movie.source_id.value = res.data.source_id;
        newState.movie.released_date.value = convert(res.data.released_date);

        this.setState(newState);
      })
      .catch(err => {
        const newState = { ...this.state };
        newState.errors = err.response.data;

        this.setState(newState);
      });
  }
  //On form submit
  onMovieSubmitHandler = e => {
    e.preventDefault();
    const newState = { ...this.state };
    newState.currentUser = this.props.auth.user._id;
    this.setState(newState);
    let genreArToStr = this.state.movie.genre.value.join(",");
    const newMovie = {
      title: this.state.movie.title.value,
      genre: genreArToStr,
      description: this.state.movie.description.value,
      source_id: this.state.movie.source_id.value,
      image_url: this.state.movie.image_url.value,
      released_date: this.state.movie.released_date.value,
      uploaded_by: this.props.auth.user._id
    };
    axios
      .put("/movies/edit-movie/" + this.props.match.params.id, newMovie)
      .then(res => this.props.history.push("/"))
      .catch(err => {
        //if error send error message to form
        const newState = { ...this.state };
        newState.errors = err.response.data;

        this.setState(newState);
      });
  };

  //Delete Movie
  onMovieDeleteSelectHandler = (e, id) => {
    e.preventDefault();
    axios
      .delete("/movies/delete/" + id)
      .then(res => this.props.history.push("/"))
      .catch(err => {
        //if error send error message to form
        const newState = { ...this.state };
        newState.errors = err.response.data;

        this.setState(newState);
      });
  };

  render() {
    //Define movie form array
    let movieUploadForm = [];

    for (let key in this.state.movie) {
      movieUploadForm.push({ id: key, setup: this.state.movie[key] });
    }
    return (
      <Form
        className={"justify-content-center ".concat(Classes.Form)}
        onSubmit={e => this.onMovieSubmitHandler(e)}
      >
        {movieUploadForm.map(elem => (
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

        <Button variant="primary" type="submit" size="lg" block>
          Upload
        </Button>
        <Button
          variant="danger"
          type="submit"
          onClick={e =>
            this.onMovieDeleteSelectHandler(e, this.props.match.params.id)
          }
          size="lg"
          block
        >
          Delete
        </Button>
      </Form>
    );
  }
}
EditMovie.propTypes = {
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => {
  return {
    auth: state.auth
  };
};
export default connect(
  mapStateToProps,
  {}
)(EditMovie);
