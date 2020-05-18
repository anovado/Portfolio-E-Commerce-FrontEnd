import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import CategoryBanner from "../component/CategoryBanner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
// import ProductFrame from "../component/ProductFrame";
import { handleRequestCategory, getRes, getProductData } from "../store/actions/actionProduct";
import { doLogOut } from "../store/actions/actionUser";
import { postTransaction } from "../store/actions/actionTransaction";

class Product extends Component {

  componentDidMount = async () => {

    const paramCategory = await this.props.match.params.category;
    this.props.getRes(paramCategory)
  }

  postTrans = async (e) => {
    e.preventDefault();
    await this.props.postTransaction(e.target.value);

    this.props.statusError ? alert("You haven't successfully added this item to your cart!") : this.props.history.push("/cart");
  }
  render() {

    let isPromo = this.props.productDetails.promo
    const isLogin = localStorage.getItem("isLogin");

    return (
      <div>

        <Header {...this.props} />

        <Banner />
        <div className="container">

          <div className="row mb-5">

            <div className="col-lg-5" id="picture-in-product" style={{ marginTop: "-70px" }}>
              <img className="img-fluid" id="product-picture-page" src={this.props.productDetails.image} style={{ borderRadius: "10px", height: "100%" }} alt="product" />
            </div>

            <div className="col-lg-6">

              <div className="card mt-4 text-left">
                <div className="card-body">
                  <h2 className="card-title text-center">{this.props.productDetails.name}</h2>
                  <hr className="divider my-4" />
                  <h4>Rp {this.props.productDetails.price},-</h4>
                  <p className="card-text">Ingredients: {this.props.productDetails.ingredients}</p>
                  <p className="card-text">Weight: {this.props.productDetails.weight} grams</p>
                  {isPromo ? (
                    <p className="card-text">This product is on a {this.props.productDetails.discount}% discount</p>
                  ) : false}
                  <span>Rating: <img src={require("../assets/images/5stars.png")} alt="5 stars" style={{ width: "95px" }} />
                  </span>

                </div>
                {isLogin ? (
                  <button className="btn" value={this.props.productDetails.id} onClick={(e) => this.postTrans(e)} >Add to cart</button>

                ) : (
                    <button className="btn" value={this.props.productDetails.id}><Link to="/signin">Add to cart</Link></button>
                  )}
              </div>
            </div>
          </div>
          {/* <div style={{ height: "8rem" }}></div> */}
          <div className="container mt-5">
            <div className="row justify-content-center mt-5">
              <div className="col-lg-8 text-center">
                <h2 className="mt-0">Product Reviews</h2>
                <hr className="divider my-4" />

              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                {/* <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+62 (21) 123-4567</div> */}
              </div>
              <div className="col-lg-4 mr-auto text-center">
                {/* <i className="fas fa-envelope fa-3x mb-3 text-muted"></i
                ><a className="d-block" href="mailto:cs@breadcrumb.com">cs@breadcrumb.com</a> */}
              </div>
            </div>
          </div>
          <div className="card card-outline-secondary mt-5" style={{ width: "100%" }}>
            <div className="card-body">
              <p>So delicious!!</p>
              <small className="text-muted">Posted by Anonymous on 5/14/20</small>
              <hr />
              <p>We love this bread!!!</p>
              <small className="text-muted">Posted by Anonymous on 5/10/20</small>
              <hr />
              <a href="#" className="btn btn-success">Leave a Review</a>
            </div>
          </div>



        </div>

        <Footer />
      </div >
    )
  }
};

const mapStateToProps = (state) => {
  return {
    // allProducts: state.product.allProducts,
    productDetails: state.product.productDetails,
    dataUser: state.user,
    login: state.user.isLogin,

  };
};


const mapDispatchToProps = {
  getRes,
  getProductData,
  handleRequestCategory,
  postTransaction,
  doLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);