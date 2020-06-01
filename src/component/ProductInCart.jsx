import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const ProductInCart = (props) => {
  // const { props.name, props.image, props.id, props.qty, props.price } = props;
  const url = `/product/${props.id}`;
  console.log("qty in cart", props.qty);
  return (
    <div>
      <ul className="cartWrap" style={{ borderBottom: "1px solid #ccc" }}>
        <li className="items odd">
          <div className="infoWrap">
            <Link to={url}></Link>
            <div className="cartSection">
              <img src={props.image} alt="" className="itemImg" />
              <p className="itemNumber">PRODUCT ID: {props.id}</p>
              <h3>Item Name: {props.name}</h3>
              <p>
                {" "}
                <input type="text" className="props.qty" placeholder="3" />
                {props.qty} x Rp {props.price},-
              </p>
              <p className="stockStatus"> In Stock</p>
            </div>
            <div className="prodTotal cartSection">
              <p>Rp {props.qty * props.price},-</p>
            </div>
            <div className="cartSection removeWrap">
              <button
                className="tombolplusmin"
                value={props.product_id}
                onClick={(e) => props.clickMinus(e)}
              >
                -
              </button>
              <span className="qty-updated">{props.qty}</span>
              <button
                className="tombolplusmin"
                value={props.product_id}
                onClick={(e) => props.clickPlus(e)}
              >
                +
              </button>
              <button
                onClick={(e) => props.deleteTrans(e)}
                value={props.id}
                style={{ borderRadius: "50%" }}
                className="remove"
              >
                x
              </button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProductInCart;
