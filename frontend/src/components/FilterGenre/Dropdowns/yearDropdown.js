import React from "react";
import Classes from "./dropdown.css";
import WithClass from "../../../HOC/ReactAux";

const dropdown = props => {
  let yearList = null;

  if (props.displayYear) {
    yearList = (
      <ul className={Classes.Dropdown}>
        <li>
          <input
            type="checkbox"
            id="2000"
            name="2000"
            value="2000"
            onChange={props.selectYear()}
          />
          2000
        </li>

        <li>
          <input
            type="checkbox"
            id="2015"
            name="2015"
            value="2015"
            onChange={props.selectYear()}
          />
          2015
        </li>
        <li>
          <input
            type="checkbox"
            id="2018"
            name="2018"
            value="2018"
            onChange={props.selectYear()}
          />
          2018
        </li>
      </ul>
    );
  }

  return (
    <WithClass>
      <button
        onClick={props.yearSelectHandler()}
        className="btn btn-dark btn-lg"
      >
        Year
      </button>
      {yearList}
    </WithClass>
  );
};

export default dropdown;
