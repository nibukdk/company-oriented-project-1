import React, { Component } from "react";
import Input from "../../../UI/Input/input";
import Classes from "./register.css";

class Register extends Component {
  render() {
    return (
      <form className={Classes.Form}>
        <Input
          elType="text"
          elName="name"
          divClass="form-group"
          className="form-control"
        />
      </form>
      // <form>
      // <div className="form-group">
      //   <label htmlFor="exampleFormControlInput1">Email address</label>
      //   <input
      //     type="email"
      //     className="form-control"
      //     id="exampleFormControlInput1"
      //     placeholder="name@example.com"
      //   />
      // </div>
      //   <div className="form-group">
      //     <label htmlFor="exampleFormControlSelect1">Example select</label>
      //     <select className="form-control" id="exampleFormControlSelect1">
      //       <option>1</option>
      //       <option>2</option>
      //       <option>3</option>
      //       <option>4</option>
      //       <option>5</option>
      //     </select>
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="exampleFormControlSelect2">Example multiple select</label>
      //     <select multiple className="form-control" id="exampleFormControlSelect2">
      //       <option>1</option>
      //       <option>2</option>
      //       <option>3</option>
      //       <option>4</option>
      //       <option>5</option>
      //     </select>
      //   </div>
      //   <div className="form-group">
      //     <label htmlFor="exampleFormControlTextarea1">Example textarea</label>
      //     <textarea
      //       className="form-control"
      //       id="exampleFormControlTextarea1"
      //       rows="3"
      //     />
      //   </div>
      // </form>
    );
  }
}

export default Register;
