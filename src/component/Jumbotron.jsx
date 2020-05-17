import React from "react";
// import { BrowserRouter } from 'react-router-dom';


const Jumbotron = () => {
    return (
        <div>
            <header className="masthead">
                <div className="container">
                    <div className="masthead-subheading">Welcome To Our Bakery!</div>
                    <div className="masthead-heading text-uppercase">Fancy some delicious treats?</div>
                    <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" id="tell-more-button" href="#services">Tell Me More</a>
                </div>
            </header>
        </div>
    )
};

export default Jumbotron;