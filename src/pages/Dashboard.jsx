import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  changeInputClient,
  getClientData,
  deleteClient,
} from "../store/actions/actionDashboard";
import { doLogOut } from "../store/actions/actionUser";

class Dashboard extends Component {
  render() {
    return (
      <div style={{}} id="dashboard-body">
        <Header {...this.props} />
        <div style={{ height: "10rem" }}></div>
        <div className="page-wrapper bg-gra-03 sidebar">
          <h2>DASHBOARD ADMIN</h2>
          <div
            className="container"
            style={{
              backgroundColor: "rgb(251, 199, 199)",
              color: "white",
              borderRadius: "15px",
            }}
          >
            <div className="row">
              <div className="wrapper center-block hidden-xs">
                <div className="filters-text"></div>
                <div
                  className="panel-group"
                  id="accordion"
                  role="tablist"
                  aria-multiselectable="true"
                >
                  <div className="panel panel-default mb-2">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          POST PRODUCT TYPE
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body mt-3">
                        <div className="form-label-group">
                          <input
                            type="text"
                            id="inputUsername"
                            className="form-control"
                            name="productType"
                            placeholder="Product Type"
                            onChange={(e) => this.props.changeInput(e)}
                            required
                            autoFocus
                          />
                          <label htmlFor="inputUsername">Product Type</label>
                        </div>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default mb-2">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          POST PAYMENT METHOD
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body">
                        <div className="form-label-group">
                          <input
                            type="text"
                            className="form-control inputUsername"
                            name="paymentMethod"
                            placeholder="Payment Method"
                            onChange={(e) => this.props.changeInput(e)}
                            required
                            autoFocus
                          />
                          <label htmlFor="inputUsername">Payment Method</label>
                        </div>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default mb-2">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          POST SHIPPING METHOD
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body">
                        <div className="form-label-group">
                          <input
                            type="text"
                            className="form-control inputUsername"
                            name="shippingMethod"
                            placeholder="Shipping Method"
                            onChange={(e) => this.props.changeInput(e)}
                            required
                            autoFocus
                          />
                          <label htmlFor="inputUsername">Shipping Method</label>
                        </div>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default mb-2">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          GET ALL CLIENT
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body">
                        <div className="form-label-group">
                          <input
                            type="text"
                            onChange={(e) => this.props.changeInput(e)}
                            className="form-control inputUsername"
                            name="categoryName"
                            placeholder="Get Client Data"
                            required
                            autoFocus
                          />
                          <label htmlFor="inputUsername">
                            Filter untuk get data client
                          </label>
                        </div>
                        <button
                          type="submit"
                          onClick={() => this.props.getClients}
                          className="btn"
                        >
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="panel panel-default mb-2">
                    <div className="panel-heading" role="tab" id="heading1">
                      <h4 className="panel-title">
                        <a
                          className="collapsed"
                          role="button"
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href="#collapse1"
                          aria-expanded="false"
                          aria-controls="collapse1"
                        >
                          DELETE CLIENT
                        </a>
                      </h4>
                    </div>
                    <div
                      id="collapse1"
                      className="panel-collapse collapse"
                      role="tabpanel"
                      aria-labelledby="heading1"
                    >
                      <div className="panel-body">
                        <div className="form-label-group">
                          <input
                            type="text"
                            className="form-control inputUsername"
                            name="shippingMethod"
                            placeholder="Shipping Method"
                            onChange={(e) => this.props.changeInput(e)}
                            required
                            autoFocus
                          />
                          <label htmlFor="inputUsername">
                            Input client id to delete
                          </label>
                        </div>
                        <button type="submit" className="btn">
                          Submit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
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
    login: state.user.isLogin,
    // status: state.user.status,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputClient(e),
  getClients: (e) => getClientData(e),
  deleteClient,
  doLogOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
// export default SignInForm;
