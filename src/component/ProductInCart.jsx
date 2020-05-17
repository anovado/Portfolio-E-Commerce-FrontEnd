import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const ProductInCart = (props) => {
  const { name, image, id, qty, price } = props
  const url = `/product/${id}`
  return (
    <div>
      <ul className="cartWrap" style={{ borderBottom: "1px solid #ccc" }}>
        <li className="items odd">
          <div className="infoWrap">
            <Link to={url}></Link>
            <div className="cartSection">
              <img src={image} alt="" className="itemImg" />
              <p className="itemNumber">PRODUCT ID: {id}</p>
              <h3>Item Name: {name}</h3>
              <p> <input type="text" className="qty" placeholder="3" />{qty} x Rp {price},-</p>
              <p className="stockStatus"> In Stock</p>
            </div>
            <div className="prodTotal cartSection">
              <p>Rp {qty * price},-</p>
            </div>
            <div className="cartSection removeWrap">
              <button onClick={(e) => props.deleteTrans(e)} value={id} style={{borderRadius:"50%"}} className="remove">x</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default ProductInCart;