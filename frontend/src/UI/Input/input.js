import React from "react";

const input = props => {
  let inputElement = null;
  switch (props.elType) {
    case "text":
      inputElement = (
        <div className={props.divClass}>
          <label htmlFor={props.elName}>{props.elName.toUpperCase()}</label>
          <input
            type="text"
            name={props.elName}
            value={props.elValue}
            id={props.elName}
            placeholder={props.elName.toUpperCase()}
            className={props.className}
          />
        </div>
      );
      break;

    case "password":
      inputElement = (
        <div className={props.divClass}>
          <label htmlFor={props.elName}>{props.elName.toUpperCase()}</label>
          <input
            type="password"
            name={props.elName}
            value={props.elValue}
            id={props.elName}
            placeholder={props.elName.toUpperCase()}
            className={props.className}
          />
        </div>
      );
      break;
    case "email":
      inputElement = (
        <div className={props.divClass}>
          <label htmlFor={props.elName}>{props.elName.toUpperCase()}</label>
          <input
            type="email"
            name={props.elName}
            value={props.elValue}
            id={props.elName}
            placeholder={props.elName.toUpperCase()}
            className={props.className}
          />
        </div>
      );
      break;
    case "checkbox":
      inputElement = (
        <div className={props.divClass}>
          <label htmlFor={props.elName}>{props.elName.toUpperCase()}</label>
          <input
            type="checkbox"
            name={props.elName}
            value={props.elValue}
            id={props.elName}
            className={props.className}
          />
        </div>
      );
      break;
    case "textarea":
      inputElement = (
        <div className={props.divClass}>
          <label htmlFor={props.elName}>{props.elName.toUpperCase()}</label>
          <textarea name={props.elName} id={props.elName}>
            {props.elValue}
          </textarea>
        </div>
      );
      break;
    default:
      inputElement = null;
  }

  return inputElement;
};

export default input;
