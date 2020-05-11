import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { doLogin, changeInputUser } from "../store/actions/actionUser";


class SignInForm extends Component {

  // function to handle signin
  postLogin = async () => {
    await this.props.doLogin();
    const isLogin = this.props.login;
    console.warn(this.props)
    if (isLogin) {
      this.props.history.push("/categories");
    }
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="d-none d-md-flex col-md-4 col-lg-6 bg-image"></div>
          <div className="col-md-8 col-lg-6">
            <div className="login d-flex align-items-center py-5">
              <div className="container">
                <div className="row">
                  <div className="col-md-9 col-lg-8 mx-auto">
                    <h3 className="login-heading mb-4">Welcome back!</h3>
                    <form onSubmit={(e) => e.preventDefault()}>
                      <div className="form-label-group">
                        <input type="text" id="inputUsername" className="form-control" name="namaPengguna" placeholder="Username" onChange={(e) => this.props.changeInput(e)} required autoFocus />
                        <label htmlFor="inputUsername">Username</label>
                      </div>

                      <div className="form-label-group">
                        <input type="password" id="inputPassword" className="form-control" name="kataKunci" placeholder="Password" onChange={(e) => this.props.changeInput(e)} required />
                        <label htmlFor="inputPassword">Password</label>
                      </div>

                      <button className="btn btn-lg btn-primary btn-block btn-login text-uppercase font-weight-bold mb-2" onClick={() => this.postLogin()} type="submit">Sign in</button>

                      <div className="text-center">
                        <Link className="small" to="/signup">Don't have an account? Sign Up</Link>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};



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

export default connect(mapStateToProps, mapDispatchToProps)(SignInForm);
// export default SignInForm;