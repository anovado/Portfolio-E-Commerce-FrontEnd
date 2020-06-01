import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import CategoryBanner from "../component/CategoryBanner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductFrame from "../component/ProductFrame";

import {
  handleRequestCategory,
  getRes,
  getProductData,
  getProductsByCategory,
} from "../store/actions/actionProduct";
import { doLogOut } from "../store/actions/actionUser";

class EachCategory extends Component {
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    const paramCategory = await this.props.match.params.category;
    this.props.getProductsByCategory(paramCategory);
  };

  handleRequestCategoryProducts = async (CategoryName) => {
    await this.props.history.replace("/product/" + CategoryName);
    const paramCategory = this.props.match.params.category;
    this.props.handleRequestCategory(paramCategory);
    window.scrollTo(0, 0);
  };

  render() {
    const allProductsData = this.props.allProducts;
    let productType;
    if (this.props.match.params.category === "1") {
      productType = "CROISSANT";
    } else if (this.props.match.params.category === "2") {
      productType = "MACARON";
    } else if (this.props.match.params.category === "3") {
      productType = "BREAD";
    } else if (this.props.match.params.category === "4") {
      productType = "DONUT";
    } else if (this.props.match.params.category === "5") {
      productType = "PIE";
    } else if (this.props.match.params.category === "6") {
      productType = "CAKE";
    }

    return (
      <div>
        <Header {...this.props} />
        <CategoryBanner />
        <div className="text-center mt-5" style={{ color: "#201e1f" }}>
          <h1 id="each-category-title">{productType}</h1>
          <hr className="divider my-4" style={{ maxWidth: "20rem" }} />
        </div>
        <div className="container">
          <div className="row">
            {allProductsData.map((el, index) => (
              <div className="col-lg-4 mt-3">
                <ProductFrame
                  name={el.name}
                  image={el.image}
                  id={el.id}
                  handleRouter={(e) => this.handleRequestCategoryProducts(e)}
                />
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    product: state.product,
    allProducts: state.product.allProducts,
  };
};

const mapDispatchToProps = {
  getRes,
  getProductData,
  handleRequestCategory,
  doLogOut,
  getProductsByCategory: (e) => getProductsByCategory(e),
};

export default connect(mapStateToProps, mapDispatchToProps)(EachCategory);
