import React, { Component } from "react";
import { Link } from "react-router-dom";
import SignIn from "../component/SignIn";
import SignUp from "../component/SignUp";
import Search from "../component/Search";
// import mainBackground from "../assets/images/mainBackground";

class Home extends Component {
  render() {
    return (
      // <div style={{ backgroundImage: `url(${mainBackground})` }} >
      <div id="container jumbotron-background">
        <img src={require("../assets/images/main-background.jpg")} id="main-bg" alt="" />
        <img src={require("../assets/images/logo_transparent.png")} className="top-right" alt="logo breadcrumb" />

        <ul class="nav nav-tabs" role="tablist">
          <li role="presentation" class="active"><a href="#tab-01" aria-controls="tab-01" role="tab" id="home-page-tabs" data-toggle="tab">Search</a></li>
          <li role="presentation"><a href="#tab-02" aria-controls="tab-02" role="tab" id="home-page-tabs2" data-toggle="tab">Log In</a></li>
          <li role="presentation"><a href="#tab-03" aria-controls="tab-03" role="tab" id="home-page-tabs3" data-toggle="tab">Register</a></li>
        </ul>
        <div class="tab-content">
          <div role="tabpanel" class="tab-pane active" id="tab-01">
            <Search />
          </div>
          <div role="tabpanel" class="tab-pane" id="tab-02">
            <SignIn />
          </div>
          <div role="tabpanel" class="tab-pane" id="tab-03">
            <SignUp />
          </div>
        </div>
        {/* <ul class="nav nav-tabs">
          <li class="nav-item">
            <Link class="nav-link active" href="#">Sign In</Link>
            <SignIn />
          </li>
          <li class="nav-item">
            <Link class="nav-link" href="#">Sign Up</Link>
            <SignUp />
          </li>
        </ul> */}
      </div>
    )

  }
}

export default Home;