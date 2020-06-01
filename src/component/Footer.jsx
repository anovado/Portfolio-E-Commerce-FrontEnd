import React from "react";

const Footer = (props) => {
  return (
    <div>
      <section className="page-section mt-5" id="contact">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <h2 className="mt-0">Let's Get In Touch!</h2>
              <hr className="divider my-4" />
              <p className="text-muted mb-5">
                Do you have any critique or suggestion for us? Feel freely to
                give us a call or send us an email!
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 ml-auto text-center mb-5 mb-lg-0">
              <i className="fas fa-phone fa-3x mb-3 text-muted"></i>
              <div>+62 (21) 123-4567</div>
            </div>
            <div className="col-lg-4 mr-auto text-center">
              <i className="fas fa-envelope fa-3x mb-3 text-muted"></i>
              <a className="d-block" href="mailto:cs@breadcrumb.com">
                cs@breadcrumb.com
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-dark mt-5 py-5">
        <div className="container mt-0">
          <div className="row d-flex justify-content-center mt-0 mb-1">
            <img
              src={require("../assets/images/logo_transparent.png")}
              id="logo-footer"
              alt="logo"
            />
          </div>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-4 mb-lg-0">
              <div className="small text-center text-muted">
                Copyright © 2020 - BREADCRUMB
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
