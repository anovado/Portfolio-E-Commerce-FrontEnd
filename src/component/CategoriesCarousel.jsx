import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const CategoriesCarousel = (props) => {

  return (
    <div class="container-fluid my-5">
      <h2 class="text-center mt-0">A Variety of Our Products</h2>
      <hr class="divider my-4" />

      <div class="container-fluid text-center my-3">
        {/* <h3>Bootstrap 4 Multiple Item Carousel</h3> */}
        <div id="recipeCarousel" class="carousel slide w-100" data-ride="carousel">
          <div class="carousel-inner w-100" role="listbox">
            <div class="carousel-item row no-gutters active">
              <Link to="/categories"><div class="col-4 float-left">
                <img class="img-fluid" alt="" src={require("../assets/images/croissant-almonds.jpg")} />
              </div></Link>
              <Link to="/"><div class="col-4 float-left">
                <img class="img-fluid" alt="" src={require("../assets/images/croissant-bread-with-blueberries.jpg")} />
              </div></Link>
              <Link to="/categories"><div class="col-4 float-left">
                <img class="img-fluid" alt="" src={require("../assets/images/croissant-bread-with-sesame-seeds.jpg")} />
              </div></Link>
            </div>
            <div class="carousel-item row no-gutters">
              <Link to="/categories"><div class="col-4 float-left">
                <img class="img-fluid" alt="" src={require("../assets/images/croissant-cheese-food.jpg")} />
              </div></Link>
              <Link to="/categories"><div class="col-4 float-left">
                <img class="img-fluid" alt="" src={require("../assets/images/croissant-unsplash.jpg")} />
              </div></Link>
              <Link to="/categories"><div class="col-4 float-left">
                <img class="img-fluid" alt="" src={require("../assets/images/croissant-with-sugar.jpg")} />
              </div></Link>
            </div>
          </div>
          <a class="carousel-control-prev" href="#recipeCarousel" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#recipeCarousel" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>

      </div>
    </div>
  )
}
export default CategoriesCarousel;