import React from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const JoinUs = (props) => {

  return (

    <section className="contact bg-secondary mt-5" id="contact">
      <div className="container py-5">
        <h2>We <i className="fas fa-heart"></i> new friends!</h2>
        <ul className="list-inline list-social ">
          <li className="list-inline-item social-twitter">
            <a href="https://twitter.com" target="blank">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li className="list-inline-item social-facebook">
            <a href="https://facebook.com" target="blank">
              <i className="fab fa-facebook-f"></i>
            </a>
          </li>
          <li className="list-inline-item social-instagram">
            <a href="https://instagram.com" target="blank">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
};

export default JoinUs;