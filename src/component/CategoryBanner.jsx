import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const CategoryBanner = (props) => {

  return (


    <section class=" bg-image-full">
      <img class="img-fluid" src={require("../assets/images/croissant_banner.jpg")} alt="croissant banner" />
      <div style={{ height: "300px" }}></div>
    </section>



  )
}

export default CategoryBanner;