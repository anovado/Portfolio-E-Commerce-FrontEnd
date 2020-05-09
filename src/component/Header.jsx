import React from "react";
import { BrowserRouter } from 'react-router-dom';


class Header extends React.Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div class="container">
            <a class="navbar-brand js-scroll-trigger" id="logo-in-header" href="#page-top"><img src={require("../assets/images/logo_transparent_cropped.png")} alt="logo" /></a>
            <button
              class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i
                class="fas fa-bars ml-1"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarResponsive">
              <ul class="navbar-nav text-uppercase ml-auto">
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#menus">MENU</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#promos">PROMO</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#profile">PROFILE</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#cart ">CART</a></li>
                <li class="nav-item"><a class="nav-link js-scroll-trigger" href="#contact">CONTACT</a></li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- Masthead--> */}
        <header class="masthead">
          <div class="container">
            <div class="masthead-subheading">Welcome To Our Bakery!</div>
            <div class="masthead-heading text-uppercase">Fancy some delicious treats?</div>
            <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a>
          </div>
        </header>
      </div>

    )
  }
};

export default Header;
