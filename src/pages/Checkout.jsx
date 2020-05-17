import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import JoinUs from "../component/JoinUs";

class Checkout extends Component {

  render() {
    return (
        <div>
            <Header />
            <div style={{height:"10rem"}}></div>
            <h1 className="text-center">You have successfully bought your delicious foods. Bon Appetit!</h1>
            <JoinUs />
            <Footer />
        </div>
    )
  }
}

export default Checkout;
