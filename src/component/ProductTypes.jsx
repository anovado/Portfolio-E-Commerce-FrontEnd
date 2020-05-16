import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProductTypes = (props) => {

  const changeRouter = async (Category) => {
    if (props.handleRouter) {
      props.handleRouter(Category);
    } else {
      await props.history.replace("/categories/" + Category);
    }
  };
  return (
    <section class="my-5" id="portfolio">
      <div class="container-fluid p-0">
        <h2 class="text-center mt-0">At Your Service</h2>
        <hr class="divider my-4" />
        <div class="row no-gutters">
          <div class="col-lg-4 col-sm-6" onClick={() => changeRouter(1)}>
            <Link class="portfolio-box" to="#" >
              <img class="img-fluid product-type-categories" src={require("../assets/images/croissant-with-sugar.jpg")} alt="product type" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Croissants</div>
              </div>
            </Link>
          </div>
          <div class="col-lg-4 col-sm-6" onClick={() => changeRouter(2)}>
            <Link class="portfolio-box" to="#"
            ><img class="img-fluid product-type-categories" src={require("../assets/images/macaron-stack.jpg")} alt="type macaron" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Macarons</div>
              </div>
            </Link>
          </div>
          <div class="col-lg-4 col-sm-6" onClick={() => changeRouter(3)}>
            <Link class="portfolio-box" to="#"
            ><img class="img-fluid product-type-categories" src={require("../assets/images/bread-rustic.jpg")} alt="type bread" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Breads</div>
              </div></Link
            >
          </div>
          <div class="col-lg-4 col-sm-6" onClick={() => changeRouter(4)}>
            <Link class="portfolio-box" to="#"
            ><img class="img-fluid product-type-categories" src={require("../assets/images/donut-with-brown-sugar.jpg")} alt="type donut" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Donuts</div>
              </div></Link
            >
          </div>
          <div class="col-lg-4 col-sm-6" onClick={() => changeRouter(5)}>
            <Link class="portfolio-box" to="#"
            ><img class="img-fluid product-type-categories" src={require("../assets/images/pie-with-pumpkin.jpg")} alt="type pie" />
              <div class="portfolio-box-caption">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Pies</div>
              </div></Link
            >
          </div>
          <div class="col-lg-4 col-sm-6" onClick={() => changeRouter(6)}>
            <Link class="portfolio-box" to="#"
            ><img class="img-fluid product-type-categories" src={require("../assets/images/cheese-cake-1765911_1920.jpg")} alt="type cake" />
              <div class="portfolio-box-caption p-3">
                <div class="project-category text-white-50">Category</div>
                <div class="project-name">Cakes</div>
              </div></Link
            >
          </div>
        </div >
      </div >
    </section >

  )
}


ProductTypes.propTypes = {
  productType: PropTypes.string.isRequired,
};

export default ProductTypes;
