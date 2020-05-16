import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const AboutSection = (props) => {

  return (

    <section class="page-section bg-primary mb-5" id="about">
      <div class="container" id="about-section-categories">
        <div class="row justify-content-center">
          <div class="col-lg-8 mt-5 text-center">
            <h2 class="text-white mt-0">We've got what you need!</h2>
            <hr class="divider light my-4" />
            <p class="text-white-50 mb-4">Breadcrumb offers one of the highest quality pastries you can find in the market. We carefully select our bakers to make sure that we will only deliver the highest quality product.</p>
            <Link class="btn btn-light btn-xl js-scroll-trigger" to="/signup">Bake for us!</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
export default AboutSection;