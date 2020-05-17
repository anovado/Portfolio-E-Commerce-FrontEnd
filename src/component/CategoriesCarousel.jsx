import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const CategoriesCarousel = (props) => {

  return (
    <div className="container-fluid my-5">
      <h2 className="text-center mt-0">A Variety of Our Products</h2>
      <hr className="divider my-4" />

      <div className="container-fluid text-center my-3">
        {/* <h3>Bootstrap 4 Multiple Item Carousel</h3> */}
        <div id="recipeCarousel" className="carousel slide w-100" data-ride="carousel">
          <div className="carousel-inner w-100" role="listbox">
            <div className="carousel-item row no-gutters active">
              <Link to="/categories"><div className="col-4 float-left">
                <img className="img-fluid" alt="" src={require("../assets/images/croissant-almonds.jpg")} />
              </div></Link>
              <Link to="/"><div className="col-4 float-left">
                <img className="img-fluid" alt="" src={require("../assets/images/croissant-bread-with-blueberries.jpg")} />
              </div></Link>
              <Link to="/categories"><div className="col-4 float-left">
                <img className="img-fluid" alt="" src={require("../assets/images/croissant-bread-with-sesame-seeds.jpg")} />
              </div></Link>
            </div>
            <div className="carousel-item row no-gutters">
              <Link to="/categories"><div className="col-4 float-left">
                <img className="img-fluid" alt="" src={require("../assets/images/croissant-cheese-food.jpg")} />
              </div></Link>
              <Link to="/categories"><div className="col-4 float-left">
                <img className="img-fluid" alt="" src={require("../assets/images/croissant-unsplash.jpg")} />
              </div></Link>
              <Link to="/categories"><div className="col-4 float-left">
                <img className="img-fluid" alt="" src={require("../assets/images/croissant-with-sugar.jpg")} />
              </div></Link>
            </div>
          </div>
          <a className="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

      </div>
    </div>
  )
}
export default CategoriesCarousel;