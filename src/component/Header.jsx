import React, { Fragment } from "react";
import { Link } from "react-router-dom";
// import { BrowserRouter } from 'react-router-dom';

const Header = (props, postSignout) => {

  // const changeRouterProfile = async (category) => {
  //   if (props.getData) {
  //     props.getData()
  //   } else {
  //     props.history.replace("/")
  //   }
  // }

  // function to logout
  postSignout = async () => {
    await props.doLogOut()
    props.history.push("/")
  }

  let isLogin = localStorage.getItem("isLogin");
  // isLogin = props.dataUser !== undefined && props.dataUser.isLogin !== undefined ? props.dataUser.isLogin : false
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
        <div className="container-fluid mt-0" id="sticky-header">
          <div className="col-sm-1 mr-5 d-flex justify-content-between">

            <a className="navbar-brand js-scroll-trigger" href="#page-top"><img src={require("../assets/images/logo_transparent_cropped.png")} id="logo-in-header" alt="logo" /></a>
            <button
              className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive"
              aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu
              </button>
          </div>
          <div className="col-sm-6 mr-0">
            <form className="form-inline my-2 my-lg-0" action="#">
              <input className="form-control search-bar-nav" type="text" name="search" id="search-bar-header" placeholder="Search through our bakery..." aria-label="Search" />
              {/* placeholder={props.placeholder} onChange={props.doSearch} value={props.keyword} */}
              <button className="btn my-2 my-sm-0" type="submit" id="search-loop-logo"><i className="fa fa-fw fa-search"></i></button>
            </form>
          </div>
          <div className="collapse navbar-collapse col-sm-4" id="navbarResponsive">
            <ul className="navbar-nav text-uppercase ml-auto" id="ul-navbar-item">
              <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/categories">MENU</Link></li>
              {/* <li className="nav-item"><Link className="nav-link js-scroll-trigger" id="list-menu-header" href="#promos">PROMO</Link></li> */}
              {isLogin ? (
                <Fragment>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/profile">PROFILE</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/cart ">CART</Link></li>
                <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="#" onClick={() => postSignout()}>LOGOUT</Link></li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/signin">LOGIN</Link></li>
                  <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/signup">REGISTER</Link></li>
                </Fragment>
                )}
            </ul>
          </div>
        </div>
      </nav>

    </div>
  )
};

export default Header;
