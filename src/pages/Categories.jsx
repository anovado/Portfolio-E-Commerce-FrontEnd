import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Jumbotron from "../component/Jumbotron";
import ProductTypes from "../component/ProductTypes";
import AboutSection from "../component/About";
import Footer from "../component/Footer";
import JoinUs from "../component/JoinUs";

import { handleRequestCategory, getProductData, getRes } from "../store/actions/actionProduct"
import { doLogOut } from "../store/actions/actionUser"

class Categories extends Component {

  componentDidMount = async () => {
    this.props.getProductData();
    // const paramCategory = await this.props.match.params.category;
    // this.props.getRes(paramCategory);
  }

  // redux function to change router and request movies by Category
  handleRequestCategoryProducts = async (CategoryName) => {

    await this.props.history.replace("/categories/" + CategoryName);

    const paramCategory = await this.props.match.params.category;
    this.props.handleRequestCategory(paramCategory);
  };

  render() {
    const allProductsData = this.props.allProducts.filter((item) => {
      if (item.name !== null) {
        return item;
      }
      return false;
    });

    console.log("allproducts", allProductsData)
    return (
      <div>

        <Header {...this.props} />
        <Jumbotron />
        <AboutSection />
        <ProductTypes handleRouter={(e) => this.handleRequestCategoryProducts(e)} />
        <JoinUs />
        <Footer />
      </div>
    )
  }
};



const mapStateToProps = (state) => {
  return {
    allProducts: state.product.allProducts,
    dataUser: state.user,
    login: state.user.isLogin,
  };
};


const mapDispatchToProps = {
  getProductData,
  getRes,
  handleRequestCategory,
  doLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);