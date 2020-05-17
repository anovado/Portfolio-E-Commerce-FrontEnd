import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const ProductInCart = (props) => {
  return (
    <div>
      <ul class="cartWrap">
        <li class="items odd">
          <div class="infoWrap">
            <div class="cartSection">
              <img src={props.image} alt="" class="itemImg" />
              <p class="itemNumber">PRODUCT ID: {props.product_type_id}</p>
              <h3>Item Name {props.index}</h3>
              <p> <input type="text" class="qty" placeholder="3" /> x Rp 5.00</p>
              <p class="stockStatus"> In Stock</p>
            </div>
            <div class="prodTotal cartSection">
              <p>Rp {props.total_price}</p>
            </div>
            <div class="cartSection removeWrap">
              <a href="#" class="remove">x</a>
            </div>
          </div>
        </li>
      </ul>
      {/* <div className="col-lg-4">
        <img class="img-fluid" src={image} style={{ width: "100%" }} alt="product" />
      </div>
      <div className="col-lg-8">
        <p>{name}</p>
      </div> */}
    </div>
  )
}

export default ProductInCart;