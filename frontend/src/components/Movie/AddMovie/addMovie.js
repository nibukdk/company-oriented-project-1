import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Classes from "./addMovie.css";
import axios from "axios";
class AddMovie extends Component {
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
          elType: "text",
          elName: "released_date",
          className: "form-control",
          placeholder: "Released date of Movie"
        },
        value: ""
      }
    },
    errors: {}
  };

  //On Input Change
  inputChangeHandler = (e, id) => {
    const newMovieInfo = { ...this.state.movie };
    const element = { ...newMovieInfo[id] };
    element.value = e.target.value;
    newMovieInfo[id] = element;
    this.setState({ movie: newMovieInfo });
  };
  //On form submit
  onMovieSubmitHadler = e => {
    e.preventDefault();
    const newMovie = {
      title: this.state.movie.title.value,
      genre: this.state.movie.genre.value,
      description: this.state.movie.description.value,
      source_id: this.state.movie.source_id.value,
      image_url: this.state.movie.image_url.value,
      released_date: this.state.movie.released_date.value
    };
    axios
      .post("/movies/new-movie", newMovie)
      .then(res => console.log(res.data))
      .catch(err => {
        //if error send error message to form 
        let errors = { ...this.state.errors };
        errors = err.response.data;
        this.setState({ errors: errors });
      });
    console.log(newMovie);
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
        onSubmit={e => this.onMovieSubmitHadler(e)}
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
        <Button variant="primary" type="submit">
          Upload
        </Button>
      </Form>
    );
  }
}

export default AddMovie;
