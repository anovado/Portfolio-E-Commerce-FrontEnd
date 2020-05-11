import React from "react";
import { Link } from "react-router-dom";

const Search = (props) => {
  return (

    <div className="inner home-form-box" >
      <div className="panel panel-right bottom-left">
        <div className="panel-content">
          <div className="form">
            <h1 id="home-form-title">Search</h1>
            <div className="group">
              <input type="text" required />
              <span className="highlight"></span>
              <label>Search</label>
            </div>
            <Link id="send-btn" className="px-3" to="/">Search</Link>
          </div>
        </div>
      </div>
    </div >
  )
};


export default Search;