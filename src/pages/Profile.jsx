import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import JoinUs from "../component/JoinUs";
import Footer from "../component/Footer";
import ProductFrame from "../component/ProductFrame";

import { doLogOut, getUserData } from "../store/actions/actionUser";
import {
  getProductBaker,
  handleRequestCategory,
  deleteProductBaker,
} from "../store/actions/actionProduct";
import { getHistoryTransaction } from "../store/actions/actionTransaction";

class Profile extends Component {
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    await this.props.getUserData();
    await this.props.getHistoryTransaction();
    if (localStorage.getItem("status") === "baker") {
      await this.props.getProductBaker();
    }
  };

  componentDidUpdate = async () => {
    if (this.props.deleted) {
      await this.props.getProductBaker();
    }
  };

  handleEdit = async (e) => {
    localStorage.setItem("product_id", e.target.value);
    this.props.history.push("/productinput");
  };

  handleRequestCategoryProducts = async (CategoryName) => {
    await this.props.history.replace("/product/" + CategoryName);
    const paramCategory = this.props.match.params.category;
    this.props.handleRequestCategory(paramCategory);
    window.scrollTo(0, 0);
  };

  render() {
    const status = localStorage.getItem("status");
    const products = this.props.productSeller;
    console.log("products from seller", products);
    return (
      <div>
        <Header {...this.props} />
        <div style={{ height: "80px" }}></div>
        <section className="mt-5">
          <div className="container pb-5 my-5 container-profile-data">
            <div
              className="row pt-5 d-flex justify-content-center text-center"
              style={{ fontFamily: "Droid Serif, sans-serif" }}
            >
              <h1>PROFILE PAGE</h1>
            </div>
            <div className="row mt-5">
              <div className="col-lg-2"></div>
              <div className="col-lg-4">
                <div className="row">
                  <span className="caption">
                    <span className="caption-content"></span>
                  </span>
                  <img
                    className="img-fluid"
                    src="https://source.unsplash.com/700x1000/?person,headshot"
                    style={{ height: "500px", width: "350px" }}
                    alt="profile"
                  />
                </div>
              </div>
              <div className="col-lg-4">
                <div className="personal_text text-left mt-4">
                  <h6>Hi Everybody! I am a {status}</h6>
                  <h3>My name is {this.props.dataUser.name}</h3>
                  <h4>I live in {this.props.dataUser.city}</h4>
                  <p>
                    <i className="far fa-calendar-alt"></i>{" "}
                    {this.props.dataUser.email}
                  </p>
                  <p>
                    <i className="fas fa-mobile-alt"></i>{" "}
                    {this.props.dataUser.phone}
                  </p>
                  <p>
                    <i className="fas fa-map-marker-alt"></i>{" "}
                    {this.props.dataUser.street}, {this.props.dataUser.city}
                  </p>
                  <p>
                    <i className="far fa-address-card"></i>{" "}
                    {this.props.dataUser.province},{" "}
                    {this.props.dataUser.postal_code}
                  </p>
                  <div
                    className="row d-flex justify-content-between ml-1"
                    style={{ width: "200px" }}
                  >
                    <p>
                      <a href="https://facebook.com">
                        <i className="fab fa-facebook-f"></i>
                      </a>
                    </p>
                    <p>
                      <a href="https://twitter.com">
                        <i className="fab fa-twitter"></i>
                      </a>
                    </p>
                    <p>
                      <a href="https://instagram.com">
                        <i className="fab fa-instagram"></i>
                      </a>
                    </p>
                  </div>
                </div>
                <div className="row mt-2">
                  <Link to="/editprofile" className="bttn">
                    {" "}
                    Edit Profile{" "}
                  </Link>
                </div>
                {status === "baker" ? (
                  <div className="row mt-2">
                    <Link to="/productinput" className="bttn">
                      {" "}
                      Post Product{" "}
                    </Link>
                  </div>
                ) : (
                  false
                )}
              </div>
            </div>
            <div className="col-lg-2"></div>
          </div>
        </section>

        {status === "baker" ? (
          <Fragment>
            <ul
              className="nav nav-tabs d-flex justify-content-center"
              id="myTab"
              role="tablist"
              style={{ fontSize: "25px" }}
            >
              <li className="nav-item">
                <a
                  className="nav-link active"
                  id="home-tab"
                  data-toggle="tab"
                  href="#home"
                  role="tab"
                  aria-controls="home"
                  aria-selected="true"
                >
                  List of Your Products
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  id="profile-tab"
                  data-toggle="tab"
                  href="#profile"
                  role="tab"
                  aria-controls="profile"
                  aria-selected="false"
                >
                  Transaction History
                </a>
              </li>
            </ul>
            <div className="tab-content" id="myTabContent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <Fragment>
                  <div
                    className="text-center mt-5"
                    style={{ color: "#201e1f" }}
                  >
                    <h3>List of Your Products</h3>
                    <hr
                      className="divider my-4"
                      style={{ maxWidth: "10rem" }}
                    />
                  </div>
                  <div className="container">
                    <div className="row">
                      {products.map((el, index) => (
                        <div className="col-lg-3 mt-3" key={index}>
                          <ProductFrame
                            name={el.name}
                            image={el.image}
                            id={el.id}
                            handleRouter={(e) =>
                              this.handleRequestCategoryProducts(e)
                            }
                          />
                          <div className="d-flex justify-content-around px-3">
                            <button
                              className="btn button-product-profile"
                              value={el.id}
                              onClick={(e) => this.handleEdit(e)}
                            >
                              Edit
                            </button>
                            <button
                              className="btn button-product-profile"
                              value={el.id}
                              onClick={(e) =>
                                this.props.deleteProductBaker(e.target.value)
                              }
                              to="#"
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </Fragment>
              </div>
              <div
                className="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <section>
                  <div className="container mt-5">
                    <div className="row table-responsive">
                      <div className="container-fluid">
                        <h3>Your Transaction History</h3>
                        <hr className="divider my-4" />

                        {this.props.dataTransaction.map((el, index) => {
                          return (
                            <div
                              className="row"
                              key={index}
                              id="product-frame-profile-page"
                            >
                              {el.transaction_detail.map((subel, i) => {
                                return (
                                  <div className="col-lg-3 mt-5">
                                    <span className="caption">
                                      <span className="caption-content"></span>
                                    </span>
                                    <img
                                      className="img-fluid"
                                      src={subel.product_id.image}
                                      style={{ height: "350px", width: "100%" }}
                                      alt="product"
                                    />
                                    <h3 id="product-name-frame ">
                                      {subel.product_id.name}
                                    </h3>
                                    <h5 id="product-name-frame ">
                                      IDR {subel.product_id.price}
                                    </h5>
                                    <h5 id="product-name-frame ">
                                      {subel.qty} pcs
                                    </h5>
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
                            <div
                              className="row my-3"
                              style={{
                                border: "2px solid #ccc",
                                padding: "10px",
                                borderRadius: "10px",
                              }}
                            >
                              <div className="col-lg-2 totalRow">
                                <span className="value">
                                  <strong>Transaction id:</strong> {el.cart.id}
                                </span>
                              </div>
                              <div className="col-lg-5 totalRow">
                                <span className="value">
                                  <strong>Total qty:</strong>{" "}
                                  {el.cart.total_qty}
                                </span>
                              </div>
                              <div className="col-lg-5 totalRow">
                                <span className="value">
                                  <strong>Subtotal:</strong>{" "}
                                  {el.cart.total_price} IDR
                                </span>
                              </div>
                            </div>
                          </Fragment>
                        );
                      })}
                    </div>
                  </div>
                  <div style={{ height: "2rem" }}></div>
                </section>
              </div>
            </div>
          </Fragment>
        ) : (
          false
        )}
        {/* {status === "baker" ? (
          
        ) : (
          false
        )} */}

        <JoinUs />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    login: state.user.isLogin,
    dataTransaction: state.cart.dataCart,
    productSeller: state.product.productSeller,
    deleted: state.product.deleted,
  };
};

const mapDispatchToProps = {
  doLogOut,
  getUserData,
  getHistoryTransaction,
  getProductBaker,
  handleRequestCategory,
  deleteProductBaker,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
