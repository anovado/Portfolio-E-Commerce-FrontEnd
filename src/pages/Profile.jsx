import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import { doLogOut, getUserData } from "../store/actions/actionUser";
import { getHistoryTransaction } from "../store/actions/actionTransaction";

class Profile extends Component {

  componentDidMount = async () => {

    await this.props.getUserData()
    await this.props.getHistoryTransaction();
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
                      <Link to="/editprofile" className="bttn"> Edit Profile </Link>
                    </div>
                    {status === "baker" ? (
                      <div className="row mt-2">
                        <Link to="/productinput" className="bttn"> Post Product </Link>
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
        {status === "baker" ? (
          <section>
            <div className="container mt-5">
              <div className="row table-responsive">
                <div className="container-fluid">

                  <h3>Your Sold-Goods History</h3>
                  <hr className="divider my-4" />

                  {this.props.dataTransaction.map((el, index) => {
                    return (
                      <div className="row" key={index} id="product-frame-profile-page" >
                        {el.transaction_detail.map((subel, i) => {
                          return (
                            <div className="col-lg-3 mt-5" >
                              <span className="caption">
                                <span className="caption-content">
                                </span>
                              </span>
                              <img className="img-fluid" src={subel.product_id.image} style={{ height: "350px", width: "100%" }} alt="product" />
                              <h3 id="product-name-frame ">{subel.product_id.name}</h3>
                              <h5 id="product-name-frame ">IDR {subel.product_id.price}</h5>
                              <h5 id="product-name-frame ">{subel.qty} pcs</h5>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className=" cf mt-4">
                {this.props.dataTransaction.map((el, index) => {
                  return (
                    <Fragment className="container-fluid" key={index}>
                      <div className="row my-3" style={{ border: "2px solid #ccc", padding: "10px", borderRadius: "10px" }}>
                        <div className="col-lg-2 totalRow">
                          <span className="value"><strong>Transaction id:</strong> {el.cart.id}</span>
                        </div>
                        <div className="col-lg-5 totalRow">
                          <span className="value"><strong>Total qty:</strong> {el.cart.total_qty}</span>
                        </div>
                        <div className="col-lg-5 totalRow">
                          <span className="value"><strong>Subtotal:</strong> {el.cart.total_price} IDR</span>
                        </div>
                      </div>
                    </Fragment>
                  )
                })}
              </div>

            </div>
            <div style={{ height: "2rem" }}></div>
          </section>
        ) : false
        }

        <Footer />
      </div >

    )
  }
}


const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    login: state.user.isLogin,
    dataTransaction: state.cart.dataCart
  };
};


const mapDispatchToProps = {
  doLogOut,
  getUserData,
  getHistoryTransaction,
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);