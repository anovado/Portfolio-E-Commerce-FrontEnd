import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import SignIn from "../component/SignIn";
// import SignUp from "../component/SignUp";
import Search from "../component/Search";
import { doLogin, changeInputUser } from "../store/actions/actionUser";

class Home extends Component {
  componentDidMount = async () => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      this.props.history.push("/categories");
    }
  };

  render() {
    return (
      <div id="container jumbotron-background">
        <img
          src={require("../assets/images/main-background.jpg")}
          id="main-bg"
          alt=""
        />
        <Link to="/categories">
          <img
            src={require("../assets/images/logo_transparent.png")}
            className="top-right"
            alt="logo breadcrumb"
          />
        </Link>

        <ul className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active">
            <a
              href="#tab-01"
              aria-controls="tab-01"
              role="tab"
              id="home-page-tabs"
              data-toggle="tab"
            >
              Search
            </a>
          </li>
          <li role="presentation">
            <a
              href="#tab-02"
              aria-controls="tab-02"
              role="tab"
              id="home-page-tabs2"
              data-toggle="tab"
            >
              Log In
            </a>
          </li>
          {/* <li role="presentation"><a href="#tab-03" aria-controls="tab-03" role="tab" id="home-page-tabs3" data-toggle="tab">Register</a></li> */}
        </ul>
        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="tab-01">
            <Search />
          </div>
          <div role="tabpanel" className="tab-pane" id="tab-02">
            <SignIn {...this.props} />
          </div>
          {/* <div role="tabpanel" className="tab-pane" id="tab-03">
            <SignUp />
          </div> */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    namaPengguna: state.user.namaPengguna,
    kataKunci: state.user.kataKunci,
    login: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin: doLogin,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
