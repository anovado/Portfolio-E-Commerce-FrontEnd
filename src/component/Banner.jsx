import React from "react";
// import { BrowserRouter } from 'react-router-dom';


const Banner = () => {
  return (

    <section class=" bg-image-full">
      <img class="img-fluid" id="img-banner-input" src={require("../assets/images/banner.jpg")} alt="form input banner" style={{ width: "100%" }} />
      {/* <div style={{ height: "300px" }}></div> */}
    </section>

  )
};

export default Banner;