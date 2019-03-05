import React from "react";

const withClass = props => (
  <div className={props.Classes}>{props.children}</div>
);

export default withClass;
