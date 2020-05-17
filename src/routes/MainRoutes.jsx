import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";

import { Provider } from "react-redux";
import store from "../store";

import Home from "../pages/Home";
import Categories from "../pages/Categories";
import SignInForm from "../pages/SignInForm";
import SignUpForm from "../pages/SignUpForm";
import EachCategory from "../pages/EachCategory";
import ProductInput from "../pages/ProductInput";
import Product from "../pages/Product";
import ProfileInput from "../pages/ProfileInput";
import Profile from "../pages/Profile";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import NotFound from "../pages/NotFound";


const MainRoutes = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/categories" component={Categories} />
                    <Route exact path="/signin" component={SignInForm} />
                    <Route exact path="/cart" component={Cart} />
                    <Route exact path="/signup" component={SignUpForm} />
                    <Route exact path="/productinput" component={ProductInput} />
                    <Route exact path="/profile" component={Profile} />
                    <Route exact path="/editprofile" component={ProfileInput} />
                    <Route exact path="/dashboard" component={Dashboard} />
                    <Route exact path="/product/:category" component={Product} />
                    <Route exact path="/categories/:category" component={EachCategory} />
                    <Route component={NotFound} />

                </Switch>
            </BrowserRouter>
        </Provider>
    );
};

export default MainRoutes;