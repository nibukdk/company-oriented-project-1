import React, { Component } from "react";
import Classes from './footers.css'

class Footers extends Component {
  render() {
    return (
      <footer className={"bg-dark text-center ".concat(Classes.Footer)}>
        Copyright &copy {new Date().getFullYear()} MovieWatch
      </footer>
    );
  }
}

export default Footers;
