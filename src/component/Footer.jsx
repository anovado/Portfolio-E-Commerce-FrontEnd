import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const Footer = (props) => {
  return (
    <div>

      <section class="page-section" id="contact">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8 text-center">
              <h2 class="mt-0">Let's Get In Touch!</h2>
              <hr class="divider my-4" />
              <p class="text-muted mb-5">Do you have any critique or suggestion for us? Feel freely to give us a call or send us an email!</p>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i class="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+62 (21) 123-4567</div>
            </div>
            <div class="col-lg-4 mr-auto text-center">
              <i class="fas fa-envelope fa-3x mb-3 text-muted"></i
              ><a class="d-block" href="mailto:cs@breadcrumb.com">cs@breadcrumb.com</a>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-dark mt-5 py-5">
        <div class="container mt-0">
          <div className="row d-flex justify-content-center mt-0 mb-1">

            {/* <div class="col-lg-4 text-center mb-lg-0"> */}
            <img src={require("../assets/images/logo_transparent.png")} id="logo-footer" alt="logo" />
            {/* </div> */}
          </div>
          <div className="row d-flex justify-content-center">

            <div class="col-lg-4 mb-lg-0">
              <div class="small text-center text-muted">Copyright © 2020 - BREADCRUMB</div>
            </div>
          </div>
        </div>
      </footer>
    </div>

  )
};

export default Footer;