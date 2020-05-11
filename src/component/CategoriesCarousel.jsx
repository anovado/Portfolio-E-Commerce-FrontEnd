import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const CategoriesCarousel = (props) => {

    return (
        <div class="container-fluid">
            <div id="carouselExample" class="carousel slide" data-ride="carousel" data-interval="9000">
                <div class="carousel-inner row w-100 mx-auto" role="listbox">
                    <div class="carousel-item col-md-4 active">
                        <img class="img-fluid mx-auto d-block" src={require("../assets/images/cheese-cake-sliced-blueberry.jpg")} alt="slide 1" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src={require("../assets/images/croissant-bread-with-blueberries.jpg")} alt="slide 2" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src={require("../assets/images/macaroon-A-unsplash.jpg")} alt="slide 3" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src={require("../assets/images/pie-with-fruit.jpg")} alt="slide 4" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src={require("../assets/images/bread-2-baguette.jpg")} alt="slide 4" />
                    </div>
                    <div class="carousel-item col-md-4">
                        <img class="img-fluid mx-auto d-block" src={require("../assets/images/donut-held-background-black.jpg")} alt="slide 4" />
                    </div>

                </div>
                <a class="carousel-control-prev" href="#carouselExample" role="button" data-slide="prev">
                    <i class="fa fa-chevron-left fa-lg text-muted"></i>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next text-faded" href="#carouselExample" role="button" data-slide="next">
                    <i class="fa fa-chevron-right fa-lg text-muted"></i>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
export default CategoriesCarousel;