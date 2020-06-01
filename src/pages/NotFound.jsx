import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div id="container jumbotron-background">
        <img
          className=" py-5 px-5"
          src={require("../assets/images/404-preview.jpg")}
          id="main-bg"
          alt="404"
        />
        <Link to="/categories">
          <button className="top-right btn ">Go back to the bakery </button>
        </Link>
      </div>
    );
  }
}

export default NotFound;
