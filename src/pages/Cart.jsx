import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import ProductInCart from "../component/ProductInCart";
import { doLogOut } from "../store/actions/actionUser";
import { getTransDetail, deleteTransaction } from "../store/actions/actionTransaction";
import { getProductsByCategory } from "../store/actions/actionProduct";

class Cart extends Component {

  componentDidMount = async () => {

    // console.log('mounted')
    await this.props.getTransDetail()
  }

  delTrans = async (e) => {
    e.preventDefault();
    await this.props.deleteTransaction(e.target.value);
  }

  render() {
    console.log("get trans detail", this.props.dataCart)
    return (

      <div>
        <Header {...this.props} />
        <div className="wrap cf">
          <h1 className="projTitle">Your<span>-</span> Shopping Cart</h1>
          <div className="heading cf">
            <h1>My Cart</h1>
            <Link to="/categories" className="continue">Continue Shopping</Link>
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
                          id={sub.product_id.id}
                          product_type_id={sub.product_id.product_type_id}
                          qty={sub.qty}
                          price={sub.price}
                          deleteTrans={(e) => this.delTrans(e)}
                        />
                      </div>
                    )
                  })
                  }
                </div>
              )
            })}
          </div>
          <div className="subtotal cf">
          {this.props.data.map((el, index) => {
            return(
              <ul key={index}>
                <li className="totalRow"><span className="label">Subtotal</span><span className="value">{el.cart.total_price} IDR</span></li>
                <li className="totalRow"><span className="label">Shipping</span><span className="value">25,000 IDR</span></li>
                <li className="totalRow"><span className="label">Tax</span><span className="value">{el.cart.total_price * 0.1} IDR</span></li>
                <li className="totalRow final"><span className="label">Total</span><span className="value">{+el.cart.total_price + 25000 + (+el.cart.total_price * 0.1)}</span></li>
                <li className="totalRow"><Link to="/checkout" className="btn continue">Checkout</Link></li>
            </ul>
              )
          })}
          </div>
        </div>
        <Footer />
      </div>

    )
  }
}


const mapStateToProps = (state) => {
  return {
    productDetails: state.product.productDetails,
    login: state.user.isLogin,
    data: state.cart.dataCart,

  };
};


const mapDispatchToProps = {
  // getRes,
  // getProductData,
  // handleRequestCategory,
  getProductsByCategory,
  getTransDetail,
  deleteTransaction,
  doLogOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);