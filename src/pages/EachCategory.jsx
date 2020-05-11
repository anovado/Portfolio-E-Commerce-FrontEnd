import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";

import CategoryBanner from "../component/CategoryBanner";
import Header from "../component/Header";
import Footer from "../component/Footer";
import CategoriesCarousel from "../component/CategoriesCarousel";
// import SignUp from "../component/SignUp";
// import Search from "../component/Search";
// import { doLogin, changeInputUser } from "../store/actions/actionUser";

class EachCategory extends Component {

    render() {
        return (
            <div>
                <Header />
                <CategoryBanner />
                <CategoriesCarousel />
                <Footer />
            </div>
        )
    }
}

export default EachCategory;