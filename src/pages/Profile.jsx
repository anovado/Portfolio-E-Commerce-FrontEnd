import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import { doLogOut, getUserData } from "../store/actions/actionUser";

class Profile extends Component {

  componentDidMount = async () => {

    console.log('mounted')
    this.props.getUserData()
  }
  render() {
    const status = localStorage.getItem("status");
    return (
      <div>
        <Header {...this.props} />
        <section className="home_banner_area mb-5">
          <div className="container box_1620">
            <div className="row d-flex justify-content-center text-center" style={{ fontFamily: "Montserrat" }}>
              <h1>PROFILE PAGE</h1>
            </div>
            <div className="banner_inner d-flex align-items-center">
              <div className="banner_content">
                <div className="media row">
                  <div className="col-lg-2"></div>
                  <div className="col-lg-5">
                    <div className="row">
                      <img src="https://source.unsplash.com/700x700/?person,headshot" style={{ width: "100%" }} alt="profile" />
                    </div>
                    <div className="row mt-2">
                      <Link to="/editprofile" className="btn"> Edit Profile </Link>
                    </div>
                    {status === "baker" ? (
                      <div className="row mt-2">
                        <Link to="/productinput" className="btn"> Post Product </Link>
                      </div>
                    ) : false}
                  </div>
                  <div className="col-lg-1"></div>
                  <div className="col-lg-3 media-body">
                    <div className="personal_text">
                      <h6>Hello Everybody! I am a {status}</h6>
                      <h3>My name is {this.props.dataUser.name}</h3>
                      <h4>I live in {this.props.dataUser.city}</h4>
                      <p><i className="far fa-calendar-alt"></i> {this.props.dataUser.email}</p>
                      <p><i className="fas fa-mobile-alt"></i> {this.props.dataUser.phone}</p>
                      <p><i className="fas fa-map-marker-alt"></i> {this.props.dataUser.street}, {this.props.dataUser.city}</p>
                      <p><i className="far fa-address-card"></i> {this.props.dataUser.province}, {this.props.dataUser.postal_code}</p>
                      <div className="row d-flex justify-content-between ml-1">
                        <p><a href="https://facebook.com"><i className="fab fa-facebook-f"></i></a></p>
                        <p><a href="https://twitter.com"><i className="fab fa-twitter"></i></a></p>
                        <p><a href="https://instagram.com"><i className="fab fa-instagram"></i></a></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div style={{ height: "10rem" }}></div>
        <Footer />
      </div >

    )
  }
}


const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    login: state.user.isLogin,
  };
};


const mapDispatchToProps = {
  doLogOut,
  getUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);