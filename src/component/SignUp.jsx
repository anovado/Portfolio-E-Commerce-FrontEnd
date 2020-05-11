import React from "react";
import { Link } from "react-router-dom";

const SignUp = (props) => {
  return (

    <div className="inner home-form-box" >
      <div className="panel panel-right bottom-left">
        <div className="panel-content">
          <div className="form">
            <h1 id="home-form-title">Sign Up</h1>
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
            <Link id="send-btn" className="px-3" to="/">Register</Link>
          </div>
        </div>
      </div>
    </div >
  )
};


export default SignUp;