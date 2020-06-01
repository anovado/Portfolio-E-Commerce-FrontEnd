import React, { Component } from "react";
import { connect } from "react-redux";

import Header from "../component/Header";
import Jumbotron from "../component/Jumbotron";
import ProductTypes from "../component/ProductTypes";
import AboutSection from "../component/About";
import Footer from "../component/Footer";
import JoinUs from "../component/JoinUs";

import {
  handleRequestCategory,
  getProductData,
  getRes,
} from "../store/actions/actionProduct";
import { doLogOut } from "../store/actions/actionUser";

class Categories extends Component {
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    this.props.getProductData();
  };

  // redux function to change router and request movies by Category
  handleRequestCategoryProducts = async (CategoryName) => {
    await this.props.history.replace("/categories/" + CategoryName);

    const paramCategory = await this.props.match.params.category;
    this.props.handleRequestCategory(paramCategory);
  };

  render() {
    return (
      <div>
        <Header {...this.props} />
        <Jumbotron />
        <AboutSection />
        <ProductTypes
          handleRouter={(e) => this.handleRequestCategoryProducts(e)}
        />
        <JoinUs />
        <Footer />
      </div>
    );
  }
}

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
  doLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
