import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import SignInForm from "../pages/SignInForm";
import SignUpForm from "../pages/SignUpForm";
import EachCategory from "../pages/EachCategory";


const MainRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/signin" component={SignInForm} />
                    <Route exact path="/signup" component={SignUpForm} />
                    <Route exact path="/categories/croissant" component={EachCategory} />
                    {/* <Route exact path="/profile" component={Profile} />
          <Route path="/news-category/:category" component={Home} /> */}
                    {/* <Route component={NotMatch} /> */}
                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default MainRoutes;