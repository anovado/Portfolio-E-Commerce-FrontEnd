import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductInCart from "../component/ProductInCart";
import { doLogOut, getUserData } from "../store/actions/actionUser";
import { getTransDetail } from "../store/actions/actionTransaction";

class Cart extends Component {

  componentDidMount = async () => {

    console.log('mounted')
    this.props.getTransDetail()
  }

  render() {
    console.log("get trans detail", this.props.dataCart)
    return (

      <div>
        <Header {...this.props} />
        <div class="wrap cf">
          <h1 class="projTitle">Your<span>-</span> Shopping Cart</h1>
          <div class="heading cf">
            <h1>My Cart</h1>
            <Link to="/categories" class="continue">Continue Shopping</Link>
          </div>
          <div class="cart">
            <ProductInCart {...this.props} />
          </div>
          <div class="subtotal cf">
            <ul>
              <li class="totalRow"><span class="label">Subtotal</span><span class="value">$35.00</span></li>

              <li class="totalRow"><span class="label">Shipping</span><span class="value">$5.00</span></li>

              <li class="totalRow"><span class="label">Tax</span><span class="value">$4.00</span></li>
              <li class="totalRow final"><span class="label">Total</span><span class="value">$44.00</span></li>
              <li class="totalRow"><a href="#" class="btn continue">Checkout</a></li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    // allProducts: state.product.allProducts,
    productDetails: state.product.productDetails,
    dataUser: state.user,
    login: state.user.isLogin,
    dataCart: state.cart.dataCart,

  };
};


const mapDispatchToProps = {
  // getRes,
  // getProductData,
  // handleRequestCategory,
  getTransDetail,
  doLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);