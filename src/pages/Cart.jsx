import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
// import { doLogOut, getUserData } from "../store/actions/actionUser";

class Cart extends Component {

  render() {
    return (
      // <div className="container">
      //   <div className="row">
      //     <div className="col-lg-8">
      //       <div className="row"></div>
      //       <div className="row"></div>
      //     </div>
      //     <div className="col-lg-4"></div>
      //   </div>
      // </div>

      <div>
        <Header />
        <div class="wrap cf">
          <h1 class="projTitle">Your<span>-</span> Shopping Cart</h1>
          <div class="heading cf">
            <h1>My Cart</h1>
            <Link to="/categories" class="continue">Continue Shopping</Link>
          </div>
          <div class="cart">
            {/* <ul class="tableHead">
              <li class="prodHeader">Product</li>
              <li>Quantity</li>
              <li>Total</li>
              <li>Remove</li>
            </ul> */}
            <ul class="cartWrap">
              <li class="items odd">

                <div class="infoWrap">
                  <div class="cartSection">
                    <img src="http://lorempixel.com/output/technics-q-c-300-300-4.jpg" alt="" class="itemImg" />
                    <p class="itemNumber">#QUE-007544-002</p>
                    <h3>Item Name 1</h3>

                    <p> <input type="text" class="qty" placeholder="3" /> x $5.00</p>

                    <p class="stockStatus"> In Stock</p>
                  </div>


                  <div class="prodTotal cartSection">
                    <p>$15.00</p>
                  </div>
                  <div class="cartSection removeWrap">
                    <a href="#" class="remove">x</a>
                  </div>
                </div>
              </li>


            </ul>
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

export default Cart;