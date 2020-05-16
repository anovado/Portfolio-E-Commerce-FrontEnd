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
    return (
      <div>
        <Header />
        <section class="home_banner_area mb-5">
          <div class="container box_1620">
            <div class="banner_inner d-flex align-items-center">
              <div class="banner_content">
                <div class="media row">
                  <div className="col-lg-2"></div>
                  <div class="col-lg-5">
                    <div className="row">
                      <img src="https://source.unsplash.com/700x700/?person,headshot" style={{ width: "100%" }} alt="profile" />
                    </div>
                    <div className="row mt-2" style={{}}>
                      <Link to="/editprofile" class="btn"> Edit Profile </Link>
                    </div>
                  </div>
                  <div className="col-lg-2"></div>
                  <div class="col-lg-3 media-body">
                    <div class="personal_text mt-3">
                      <h6>Hello Everybody! I am</h6>
                      <h3>{this.props.dataUser.name}</h3>
                      <h4>I live in {this.props.dataUser.city}</h4>
                      <p><i class="far fa-calendar-alt"></i> {this.props.dataUser.email}</p>
                      <p><i class="fas fa-mobile-alt"></i> {this.props.dataUser.phone}</p>
                      <p><i class="fas fa-map-marker-alt"></i> {this.props.dataUser.street}, {this.props.dataUser.city}</p>
                      <p><i class="far fa-address-card"></i> {this.props.dataUser.province}, {this.props.dataUser.postal_code}</p>
                      <div class="row d-flex justify-content-between ml-1">
                        <p><a href="https://facebook.com"><i class="fab fa-facebook-f"></i></a></p>
                        <p><a href="https://twitter.com"><i class="fab fa-twitter"></i></a></p>
                        <p><a href="https://instagram.com"><i class="fab fa-instagram"></i></a></p>
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
      </div>

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