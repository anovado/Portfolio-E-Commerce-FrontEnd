import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const CategoryBanner = (props) => {

  return (

    <section className=" bg-image-full">
      <img className="img-fluid" src={require("../assets/images/croissant_banner.jpg")} alt="croissant banner" />
      {/* <div style={{ height: "300px" }}></div> */}
    </section>



  )
}

export default CategoryBanner;