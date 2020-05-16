import React, { Component } from "react";
import { Link } from "react-router-dom";

class NotFound extends Component {
  render() {
    return (
      <div id="container jumbotron-background">
        <img src={"https://cdn.dribbble.com/users/1661862/screenshots/5931432/404-preview.jpg"} id="main-bg" alt="" />
        <Link to="/categories"><button className="top-right btn ">Go back to the bakery </button></Link>

      </div>
    );
  }
}

export default NotFound;