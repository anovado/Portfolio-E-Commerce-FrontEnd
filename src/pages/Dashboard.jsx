import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import {
  postProductType,
  postPaymentMethod,
  postShippingMethod,
  changeInputClient,
  getClientData,
  deleteClient,
} from "../store/actions/actionDashboard";
import { doLogOut } from "../store/actions/actionUser";

class Dashboard extends Component {
  componentDidMount = async () => {
    window.scrollTo(0, 0);
    await this.props.getClientData();
  };

  componentDidUpdate = async () => {
    if (this.props.deleted) {
      await this.props.getClientData();
    }
  };

  postProductType = async () => {
    await this.props.postProductType();
    (await this.props.statusError)
      ? alert("Your attempt was failed, please try again.")
      : this.props.history.push("/dashboard");
  };

  postPayment = async () => {
    await this.props.postPaymentMethod();
    (await this.props.statusError)
      ? alert("Your attempt was failed, please try again.")
      : this.props.history.push("/dashboard");
  };

  postShipping = async () => {
    await this.props.postShippingMethod();
    (await this.props.statusError)
      ? alert("Your attempt was failed, please try again.")
      : this.props.history.push("/dashboard");
  };

  render() {
    const allClients = this.props.allClients;
    return (
      <div style={{}} id="dashboard-body">
        <Header {...this.props} />
        <div style={{ height: "7rem" }}></div>
        <div className="page-wrapper bg-gra-03 sidebar mb-5">
          <h2>DASHBOARD ADMIN</h2>
          <ul
            className="nav nav-tabs mt-5 d-flex justify-content-center"
            id="myTab"
            role="tablist"
          >
            <li className="nav-item">
              <a
                className="nav-link active"
                id="home-tab"
                data-toggle="tab"
                href="#home"
                role="tab"
                aria-controls="home"
                aria-selected="true"
              >
                Post New Product Type
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="profile-tab"
                data-toggle="tab"
                href="#profile"
                role="tab"
                aria-controls="profile"
                aria-selected="false"
              >
                Post New Payment Method
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="contact-tab"
                data-toggle="tab"
                href="#contact"
                role="tab"
                aria-controls="contact"
                aria-selected="false"
              >
                Post New Shipping Method
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                id="client-tab"
                data-toggle="tab"
                href="#client"
                role="tab"
                aria-controls="client"
                aria-selected="false"
              >
                Get All Clients
              </a>
            </li>
          </ul>
          <div className="tab-content" id="myTabContent">
            <div
              className="tab-pane fade show active"
              id="home"
              role="tabpanel"
              aria-labelledby="home-tab"
            >
              <div className="container mt-5">
                <input
                  type="text"
                  id="inputProductType"
                  className="form-control form-input-in-dashboard"
                  name="productType"
                  placeholder="Post new product type"
                  onChange={(e) => this.props.changeInput(e)}
                  required
                  autoFocus
                />
                <button
                  color="secondary"
                  className="bttn btn mt-4"
                  onClick={() => this.postProductType()}
                >
                  Submit
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="profile"
              role="tabpanel"
              aria-labelledby="profile-tab"
            >
              <div className="container mt-5">
                <input
                  type="text"
                  id="inputUsername"
                  className="form-control"
                  name="paymentMethod"
                  placeholder="Post new payment method"
                  onChange={(e) => this.props.changeInput(e)}
                  required
                  autoFocus
                />
                <button
                  color="secondary"
                  className="bttn btn mt-4"
                  onClick={() => this.postPayment()}
                >
                  Submit
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="contact"
              role="tabpanel"
              aria-labelledby="contact-tab"
            >
              <div className="container mt-5">
                <input
                  type="text"
                  id="inputUsername"
                  className="form-control"
                  name="shippingMethod"
                  placeholder="Post new shipping method"
                  onChange={(e) => this.props.changeInput(e)}
                  required
                  autoFocus
                />
                <button
                  color="secondary"
                  className="bttn btn mt-4"
                  onClick={() => this.postShipping()}
                >
                  Submit
                </button>
              </div>
            </div>
            <div
              className="tab-pane fade"
              id="client"
              role="tabpanel"
              aria-labelledby="client-tab"
            >
              <div className="container mt-5">
                <div className="row">
                  {allClients.map((el, index) => (
                    <div
                      className="col-lg-2 box-of-client my-2 mx-3"
                      key={index}
                    >
                      <p className="mb-0">username:</p>
                      <p className="detail-client mt-0 mb-3">{el.username}</p>
                      <p className="mb-0">status:</p>
                      <p className="detail-client mt-0 mb-3">{el.status}</p>
                      <button
                        to="#"
                        className="btn text-left button-delete-client"
                        value={el.id}
                        onClick={(e) => this.props.deleteClient(e.target.value)}
                      >
                        Delete Client
                      </button>
                    </div>
                  ))}
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
    statusError: state.dashboard.statusError,
    allClients: state.dashboard.allClients,
    deleted: state.dashboard.deleted,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputClient(e),
  getClientData,
  deleteClient,
  doLogOut,
  postProductType,
  postPaymentMethod,
  postShippingMethod,
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
