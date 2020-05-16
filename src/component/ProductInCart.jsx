import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div>
      <div className="col-lg-4">
        <img class="img-fluid" src={image} style={{ width: "100%" }} alt="product" />
      </div>
      <div className="col-lg-8">
        <p>{name}</p>
      </div>
    </div>
  )
}

export default Footer;