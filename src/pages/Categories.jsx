import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Jumbotron from "../component/Jumbotron";
import ProductTypes from "../component/ProductTypes";
import AboutSection from "../component/About";
import Footer from "../component/Footer";


import { doLogOut } from "../store/actions/actionUser"

class Categories extends Component {


  // componentDidMount = async () => {

  //   // const paramCategory = await this.props.match.params.category;
  //   console.log('mounted')
  //   this.props.getData()
  // }

  // redux function to change router and request movies by Category
  // handleRequestCategoryProducts = async (CategoryName) => {

  //   await this.props.history.replace("/" + CategoryName);

  //   const paramCategory = await this.props.match.params.category;
  //   this.props.handleRequestCategory(paramCategory);
  // };

  render() {
    return (
      <div>

        <Header {...this.props} />
        <Jumbotron />
        <AboutSection />
        <ProductTypes />
        <Footer />
      </div>
    )
  }
};

// export default Categories;

const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    login: state.user.isLogin,
    // home: state.movie.isHome,
    // data: state.movie.data,
    // movies: state.movie.movies,
    // isLoading: state.movie.isLoading,
  };
};


const mapDispatchToProps = {
  // getData,
  // handleRequestCategory,
  doLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);