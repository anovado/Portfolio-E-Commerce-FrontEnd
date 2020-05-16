import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

// import CategoryBanner from "../component/CategoryBanner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import Banner from "../component/Banner";
// import ProductFrame from "../component/ProductFrame";
import { handleRequestCategory, getRes, getProductData } from "../store/actions/actionProduct";
import { doLogOut } from "../store/actions/actionUser";

class Product extends Component {

  componentDidMount = async () => {

    // this.props.getProductData()
    const paramCategory = await this.props.match.params.category;
    // console.log('mounted')
    this.props.getRes(paramCategory)
  }

  render() {
    // const allProductsData = this.props.allProducts
    console.log("allproduts data", this.props.productDetails)
    let isPromo = this.props.productDetails.promo
    console.log("ispromo", isPromo)
    return (
      <div>

        <Header {...this.props} />

        <Banner />
        <div class="container">

          <div class="row mb-5">

            <div class="col-lg-5" id="picture-in-product" style={{ marginTop: "-70px" }}>
              <img class="img-fluid" id="product-picture-page" src={this.props.productDetails.image} style={{ borderRadius: "10px", height: "100%" }} alt="product" />
            </div>

            <div class="col-lg-6">

              <div class="card mt-4 text-left">
                <div class="card-body">
                  <h2 class="card-title text-center">{this.props.productDetails.name}</h2>
                  <hr class="divider my-4" />
                  <h4>Rp {this.props.productDetails.price},-</h4>
                  <p class="card-text">Ingredients: {this.props.productDetails.ingredients}</p>
                  <p class="card-text">Weight: {this.props.productDetails.weight} grams</p>
                  {isPromo ? (
                    <p class="card-text">This product is on a {this.props.productDetails.discount}% discount</p>
                  ) : false}
                  <span class="text-warning">Rating: 4.0 stars</span>

                </div>
              </div>
            </div>
          </div>
          {/* <div style={{ height: "8rem" }}></div> */}
          <div class="container mt-5">
            <div class="row justify-content-center mt-5">
              <div class="col-lg-8 text-center">
                <h2 class="mt-0">Product Reviews</h2>
                <hr class="divider my-4" />

              </div>
            </div>
            <div class="row">
              <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
                {/* <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
                <div>+62 (21) 123-4567</div> */}
              </div>
              <div class="col-lg-4 mr-auto text-center">
                {/* <i class="fas fa-envelope fa-3x mb-3 text-muted"></i
                ><a class="d-block" href="mailto:cs@breadcrumb.com">cs@breadcrumb.com</a> */}
              </div>
            </div>
          </div>
          <div class="card card-outline-secondary mt-5" style={{ width: "100%" }}>
            <div class="card-body">
              <p>So delicious!!</p>
              <small class="text-muted">Posted by Anonymous on 5/14/20</small>
              <hr />
              <p>We love this bread!!!</p>
              <small class="text-muted">Posted by Anonymous on 5/10/20</small>
              <hr />
              <a href="#" class="btn btn-success">Leave a Review</a>
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
  doLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);