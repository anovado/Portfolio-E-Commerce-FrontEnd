import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Header from "../component/Header";
import Footer from "../component/Footer";
import { doLogin, changeInputUser, postUserData, getUserData } from "../store/actions/actionUser";

class ProfileInput extends Component {

  editFormData = async () => {
    await this.props.postUserData();
    console.log(this.props.dataUser.statusError)
    await this.props.dataUser.statusError ? alert("Your attempt was failed, please try again.") : this.props.history.push("/profile");
  };

  render() {
    return (
      <div>
        <Header {...this.props} />
        <div class="page-wrapper bg-blue p-t-100 p-b-100 font-robo">
          <div class="wrapper wrapper--w960">
            <div class="card card-2">
              <div class="card-heading" style={{ background: "url(https://source.unsplash.com/300x600/?baker,baking)" }}></div>
              <div class="card-body">
                <h4 class="title">Please complete your data here:</h4>
                <form method="POST" onSubmit={(e) => e.preventDefault()}>
                  <div class="form-group">
                    <input type="text" class="form-control" name="name" onChange={(e) => this.props.changeInput(e)} id="inputName" placeholder="Your name" />
                  </div>

                  <div class="form-group">
                    <input type="email" class="form-control" name="email" onChange={(e) => this.props.changeInput(e)} id="inputEmail4" placeholder="Email" />
                  </div>

                  <div class="form-group">
                    <input type="text" class="form-control" name="street" onChange={(e) => this.props.changeInput(e)} id="inputAddress" placeholder="Your address" />
                  </div>

                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input type="text" class="form-control" name="city" onChange={(e) => this.props.changeInput(e)} id="inputCity" placeholder="Your city" />
                    </div>
                    <div class="form-group col-md-6">
                      <input type="text" class="form-control" name="province" onChange={(e) => this.props.changeInput(e)} id="inputProvince" placeholder="Your province" />
                    </div>
                  </div>
                  <div class="form-row">
                    <div class="form-group col-md-6">
                      <input type="text" class="form-control" name="postal_code" onChange={(e) => this.props.changeInput(e)} id="inputZip" placeholder="Your zip code" />
                    </div>
                    <div class="form-group col-md-6">
                      <input type="text" class="form-control" name="phone" onChange={(e) => this.props.changeInput(e)} id="inputPhone" placeholder="Your phone number" />
                    </div>
                  </div>

                  <button type="submit" class="btn btn-primary" onClick={() => this.editFormData()}>Submit</button>

                </form>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    )
  }
};

// export default ProfileInput;


const mapStateToProps = (state) => {
  return {
    dataUser: state.user,
    name: state.user.name,
    email: state.user.email,
    province: state.user.province,
    city: state.user.city,
    postal_code: state.user.postal_code,
    street: state.user.street,
    phone: state.user.phone,
    // namaPengguna: state.user.namaPengguna,
    // kataKunci: state.user.kataKunci,
    // login: state.user.isLogin,
  };
};

const mapDispatchToProps = {
  changeInput: (e) => changeInputUser(e),
  doLogin,
  getUserData,
  postUserData,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileInput);