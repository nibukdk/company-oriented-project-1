import React from "react";
import Classes from "./dropdown.css";
import WithClass from "../../../HOC/ReactAux";

const dropdown = props => {
  let genreList = null;
  {
    if (props.displayGenre) {
      genreList = (
        <ul className={Classes.Dropdown}>
          <li>
            <input
              type="checkbox"
              id="name"
              name="action"
              value="action"
              onChange={props.selectGenre()}
            />
            Action
          </li>

          <li>
            <input
              type="checkbox"
              id="comedy"
              name="comedy"
              value="comedy"
              onChange={props.selectGenre()}
            />
            Comedy
          </li>
          <li>
            <input
              type="checkbox"
              id="fantasy"
              name="fantasy"
              value="fantasy"
              onChange={props.selectGenre()}
            />
            Fantasy
          </li>
        </ul>
      );
    }
  }
  return (
    <WithClass>
      <button
        onClick={props.genreSelectHandler()}
        className="btn btn-dark btn-lg"
      >
        Genre
      </button>
      {genreList}
    </WithClass>
  );
};

export default dropdown;
