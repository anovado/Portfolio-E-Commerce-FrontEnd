import React from "react";
import { Link } from "react-router-dom";

class SignIn extends React.Component {
  render() {
    return (

      <div className="inner home-form-box" >
        <div className="panel panel-right bottom-left">
          <div className="panel-content">
            <div className="form">
              <h1 id="home-form-title">Sign In</h1>
              <div className="group">
                <input type="text" required />
                <span className="highlight"></span>
                <label>Your Username</label>
              </div>
              <div className="group">
                <input type="text" required />
                <span className="highlight"></span>
                <label>Your Password</label>
              </div>
              <Link id="send-btn" className="px-3" to="/">Send</Link>
            </div>
          </div>
        </div>
      </div >
    )
  }
};


export default SignIn;