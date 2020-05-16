import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const ProductFrame = (props) => {
    const { name, image, id } = props;

    const changeRouter = async (Category) => {
        if (props.handleRouter) {
            props.handleRouter(Category);
        } else {
            await props.history.replace("/product/" + Category);
        }
    };
    // console.log("id", id)
    return (
        <div onClick={() => changeRouter(id)} >
            <Link class="portfolio-item" to="#">
                <span class="caption">
                    <span class="caption-content">
                        <h2 id="product-name-frame ">{name}</h2>
                    </span>
                </span>
                <img class="img-fluid" src={image} style={{ height: "500px", width: "100%" }} alt="product" />
            </Link>
        </div>

    )
}

export default ProductFrame;