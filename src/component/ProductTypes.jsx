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
    <section className="my-5" id="portfolio">
      <div className="container-fluid p-0">
        <h2 className="text-center mt-0">At Your Service</h2>
        <hr className="divider my-4" />
        <div className="row no-gutters">
          <div className="col-lg-4 col-sm-6" onClick={() => changeRouter(1)}>
            <Link className="portfolio-box" to="#">
              <img
                className="img-fluid product-type-categories"
                src={require("../assets/images/croissant-bread-with-blueberries.jpg")}
                alt="product type"
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Croissants</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6" onClick={() => changeRouter(2)}>
            <Link className="portfolio-box" to="#">
              <img
                className="img-fluid product-type-categories"
                src={require("../assets/images/macaron-stack.jpg")}
                alt="type macaron"
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Macarons</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6" onClick={() => changeRouter(3)}>
            <Link className="portfolio-box" to="#">
              <img
                className="img-fluid product-type-categories"
                src={require("../assets/images/bread-rustic.jpg")}
                alt="type bread"
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Breads</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6" onClick={() => changeRouter(4)}>
            <Link className="portfolio-box" to="#">
              <img
                className="img-fluid product-type-categories"
                src={require("../assets/images/donut-with-brown-sugar.jpg")}
                alt="type donut"
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Donuts</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6" onClick={() => changeRouter(5)}>
            <Link className="portfolio-box" to="#">
              <img
                className="img-fluid product-type-categories"
                src={require("../assets/images/pie-with-pumpkin.jpg")}
                alt="type pie"
              />
              <div className="portfolio-box-caption">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Pies</div>
              </div>
            </Link>
          </div>
          <div className="col-lg-4 col-sm-6" onClick={() => changeRouter(6)}>
            <Link className="portfolio-box" to="#">
              <img
                className="img-fluid product-type-categories"
                src={require("../assets/images/cheese-cake-1765911_1920.jpg")}
                alt="type cake"
              />
              <div className="portfolio-box-caption p-3">
                <div className="project-category text-white-50">Category</div>
                <div className="project-name">Cakes</div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

ProductTypes.propTypes = {
  productType: PropTypes.string.isRequired,
};

export default ProductTypes;
