import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductInCart from "../component/ProductInCart";
import { doLogOut } from "../store/actions/actionUser";
import {
  getTransDetail,
  deleteTransaction,
  checkOut,
  updateDecrease,
  updateIncrease,
} from "../store/actions/actionTransaction";
import { getProductsByCategory } from "../store/actions/actionProduct";

class Cart extends Component {
  componentDidMount = async () => {
    const isLogin = localStorage.getItem("isLogin");
    if (!isLogin) {
      this.props.history.push("/signin");
    }
    await this.props.getTransDetail();
  };

  componentDidUpdate = async (prevProps) => {
    if (this.props.deleted) {
      await this.props.getTransDetail();
    }
    if (this.props.qty_updated) {
      await this.props.getTransDetail();
    }
  };

  delTrans = async (e) => {
    e.preventDefault();
    await this.props.deleteTransaction(e.target.value);
  };

  checkedOut = async () => {
    await this.props.checkOut();
    this.props.history.push("/checkout");
  };

  clickPlus = async (event) => {
    event.preventDefault();
    console.log("masuk plus", event.target.value);
    await this.props.updateIncrease(event.target.value);
  };

  clickMinus = async (event) => {
    event.preventDefault();
    console.log("masuk minus", event.target.value);
    await this.props.updateDecrease(event.target.value);
  };

  render() {
    return (
      <div>
        <Header {...this.props} />
        <div className="wrap cf">
          <h1 className="projTitle">Your Shopping Cart</h1>
          <div className="heading cf">
            <h1>My Cart</h1>
            <Link to="/categories" className="continue">
              Continue Shopping
            </Link>
          </div>
          <div className="cart">
            {this.props.data.map((el, index) => {
              return (
                <div key={index}>
                  {el.transaction_detail.map((sub, i) => {
                    return (
                      <div key={i}>
                        <ProductInCart
                          name={sub.product_id.name}
                          image={sub.product_id.image}
                          id={sub.id}
                          product_id={sub.product_id.id}
                          product_type_id={sub.product_id.product_type_id}
                          qty={sub.qty}
                          price={sub.product_id.price}
                          deleteTrans={(e) => this.delTrans(e)}
                          clickMinus={(e) => this.clickMinus(e)}
                          clickPlus={(e) => this.clickPlus(e)}
                        />
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="subtotal cf">
            <ul>
              {this.props.data.map((el, index) => {
                return (
                  <Fragment key={index}>
                    <li className="totalRow">
                      <span className="label">Subtotal</span>
                      <span className="value">{el.cart.total_price} IDR</span>
                    </li>
                    <li className="totalRow">
                      <span className="label">Shipping</span>
                      <span className="value">25,000 IDR</span>
                    </li>
                    <li className="totalRow">
                      <span className="label">Tax</span>
                      <span className="value">
                        {el.cart.total_price * 0.1} IDR
                      </span>
                    </li>
                    <li className="totalRow final">
                      <span className="label">Total</span>
                      <span className="value">
                        {+el.cart.total_price +
                          25000 +
                          +el.cart.total_price * 0.1}
                      </span>
                    </li>
                  </Fragment>
                );
              })}
              <li
                className="totalRow bttn btn btn-secondary text-center"
                onClick={(e) => this.checkedOut(e)}
                style={{ borderRadius: "5px" }}
              >
                Checkout
              </li>
            </ul>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productDetails: state.product.productDetails,
    login: state.user.isLogin,
    data: state.cart.dataCart,
    deleted: state.cart.deleted,
    qty_updated: state.cart.qty_updated,
  };
};

const mapDispatchToProps = {
  getProductsByCategory,
  getTransDetail,
  deleteTransaction,
  doLogOut,
  checkOut,
  updateDecrease,
  updateIncrease,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
