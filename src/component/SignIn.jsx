import React from "react";
import { Link } from "react-router-dom";

const SignIn = (props, postLogin) => {
  // function to handle signin
  postLogin = async () => {
    await props.doLogin();
    const isLogin = localStorage.getItem("isLogin");
    console.log("islogin dalam component", isLogin);
    const status = localStorage.getItem("status");
    if (isLogin && status !== "admin") {
      await props.history.push("/categories");
    } else if (isLogin && status === "admin") {
      await props.history.push("/dashboard");
    }
  };

  return (
    <div className="inner home-form-box">
      <div className="panel panel-right bottom-left">
        <div className="panel-content">
          <form onSubmit={(e) => e.preventDefault()}>
            <h1 id="home-form-title">Sign In</h1>
            <div className="group">
              <input
                type="text"
                name="namaPengguna"
                onChange={(e) => props.changeInput(e)}
                required
              />
              <span className="highlight"></span>
              <label>Your Username</label>
            </div>
            <div className="group">
              <input
                type="password"
                name="kataKunci"
                onChange={(e) => props.changeInput(e)}
                required
              />
              <span className="highlight"></span>
              <label>Your Password</label>
            </div>
            <button
              id="send-btn"
              className="px-3"
              // to="#"
              onClick={() => postLogin()}
              type="submit"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
