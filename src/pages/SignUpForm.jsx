import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import {
  changeInputUser,
  doSignUp,
  changeAccountType,
} from "../store/actions/actionUser";

class SignUpForm extends Component {
  componentDidMount = async () => {
    const isLogin = localStorage.getItem("isLogin");
    if (isLogin) {
      this.props.history.push("/categories");
    }
  };

  // function to handle signup
  postSignUp = async () => {
    console.warn("masuk function postsignup");
    if (!this.props.status) {
      alert("Please complete your data!");
    } else {
      await this.props.doSignUp();
      this.props.statusError
        ? alert("You have not registered")
        : this.props.history.push("/signin");
    }
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6" id="signup-form-bg">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome!</h3>
                    <form
                      className="form cf"
                      onSubmit={(e) => e.preventDefault()}
                    >
                      <div className="form-label-group">
                        <input
                          type="text"
                          id="inputUsername"
                          className="form-control"
                          name="namaPengguna"
                          placeholder="Username"
                          onChange={(e) => this.props.changeInput(e)}
                          required
                          autoFocus
                        />
                        <label htmlFor="inputUsername">Username</label>
                      </div>

                      <div className="form-label-group">
                        <input
                          type="password"
                          id="inputPassword"
                          className="form-control"
                          name="kataKunci"
                          placeholder="Password"
                          onChange={(e) => this.props.changeInput(e)}
                          required
                        />
                        <label htmlFor="inputPassword">Password</label>
                      </div>

                      <div className="mt-3">
                        <h5>Choose your account type:</h5>
                        <div className="input-group mt-5">
                          <input
                            className="input-group-radio"
                            id="radio1"
                            name="radio"
                            value="buyer"
                            onClick={this.props.changeAccountType}
                            type="radio"
                          />
                          <label className="radio-label" htmlFor="radio1">
                            Customer
                          </label>
                        </div>
                        <div className="input-group">
                          <input
                            className="input-group-radio"
                            id="radio2"
                            name="radio"
                            value="baker"
                            onClick={this.props.changeAccountType}
                            type="radio"
                          />
                          <label className="radio-label" htmlFor="radio2">
                            Seller
                          </label>
                        </div>
                      </div>

                      <button
                        className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2"
                        onClick={() => this.postSignUp()}
                        type="submit"
                      >
                        Sign up
                      </button>

                      <div className="text-center">
                        <Link className="small" to="/signin">
                          Already had an account? Sign In
                        </Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
    status: state.user.status,
  };
};

const mapDispatchToProps = {
  changeAccountType: (e) => changeAccountType(e),
  doSignUp: doSignUp,
  changeInput: (e) => changeInputUser(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUpForm);
