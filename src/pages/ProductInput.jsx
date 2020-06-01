import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  getProductData,
  postProductData,
  changeInputProduct,
  changeProductType,
  changePromo,
} from "../store/actions/actionProduct";
import "../assets/css/style-forminput.css";

class ProductInput extends Component {
  componentDidMount = async () => {
    window.scrollTo(0, 0);
  };

  editFormData = async () => {
    await this.props.postProductData();
    (await this.props.statusError)
      ? alert("Your attempt was failed, please try again.")
      : this.props.history.push("/profile");
  };

  render() {
    const product_id = localStorage.getItem("product_id");
    return (
      <div>
        <Header {...this.props} />

        <div className="page-wrapper bg-red p-t-100 p-b-100 font-robo">
          <div className="wrapper wrapper--w960">
            <div className="card card-2">
              <div className="card-heading"></div>
              <div className="card-body">
                {product_id ? (
                  <h2 className="title">Edit your product here:</h2>
                ) : (
                  <h2 className="title">Post your products here:</h2>
                )}
                <form method="POST" onSubmit={(e) => e.preventDefault()}>
                  <div className="input-group">
                    <input
                      className="input--style-2"
                      type="text"
                      placeholder="Name"
                      onChange={(e) => this.props.changeInput(e)}
                      name="name"
                    />
                  </div>
                  <div className="row row-space">
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          className="input--style-2"
                          type="text"
                          placeholder="Price"
                          onChange={(e) => this.props.changeInput(e)}
                          name="price"
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="input-group">
                        <input
                          className="input--style-2"
                          type="text"
                          placeholder="Weight (in grams)"
                          onChange={(e) => this.props.changeInput(e)}
                          name="weight"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="col-sm-3">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <select
                            id="product_type"
                            name="product type"
                            defaultValue="Product Type"
                          >
                            <option disabled="disabled">Product Type</option>
                            <option
                              value="1"
                              onClick={this.props.changeProductTypeId}
                            >
                              Croissants
                            </option>
                            <option
                              value="2"
                              onClick={this.props.changeProductTypeId}
                            >
                              Macarons
                            </option>
                            <option
                              value="3"
                              onClick={this.props.changeProductTypeId}
                            >
                              Breads
                            </option>
                            <option
                              value="4"
                              onClick={this.props.changeProductTypeId}
                            >
                              Donuts
                            </option>
                            <option
                              value="5"
                              onClick={this.props.changeProductTypeId}
                            >
                              Pies
                            </option>
                            <option
                              value="6"
                              onClick={this.props.changeProductTypeId}
                            >
                              Cakes
                            </option>
                          </select>
                          <div className="select-dropdown"></div>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-2">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <select name="promo" defaultValue="Promo">
                            <option disabled="disabled">Promo</option>
                            <option
                              value="true"
                              onClick={this.props.changePromoStatus}
                            >
                              True
                            </option>
                            <option
                              value=""
                              onClick={this.props.changePromoStatus}
                            >
                              False
                            </option>
                          </select>
                          <div className="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="input-group">
                        <input
                          className="input--style-2"
                          type="text"
                          placeholder="Discount"
                          onChange={(e) => this.props.changeInput(e)}
                          name="discount"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="input-group">
                      <input
                        className="input--style-2"
                        type="text-area"
                        placeholder="Ingredients"
                        onChange={(e) => this.props.changeInput(e)}
                        name="ingredients"
                      />
                    </div>
                  </div>
                  <div className="row row-space">
                    <div className="input-group">
                      <input
                        className="input--style-2"
                        type="text-area"
                        placeholder="Image"
                        onChange={(e) => this.props.changeInput(e)}
                        name="image"
                      />
                    </div>
                  </div>
                  <div className="p-t-30">
                    <button
                      className="btn btn--radius btn--green"
                      onClick={() => this.editFormData()}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    statusError: state.product.statusError,
    // nam  e: state.product.name,
    // price: state.product.price,
    // weight: state.product.weight,
    // ingredients: state.product.ingredients,
    // promo: state.product.promo,
    // discount: state.product.discount,
    // image: state.product.image,
    // product_type_id: state.product.product_type_id,
  };
};

const mapDispatchToProps = {
  // getData,
  // handleRequestCategory,
  changeInput: (e) => changeInputProduct(e),
  changeProductTypeId: (e) => changeProductType(e),
  changePromoStatus: (e) => changePromo(e),
  postProductData,
  getProductData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInput);
