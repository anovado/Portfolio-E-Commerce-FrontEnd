import axios from "axios";

// function to sign in
export const doLogin = (props) => {
  return async (dispatch, getState) => {
    await axios({
      method: "GET",
      url: "http://0.0.0.0:5050/signin",
      params: {
        username: getState().user.namaPengguna,
        password: getState().user.kataKunci,
      }
    })
      .then(async (response) => {
        if (response.data.hasOwnProperty("token")) {
          dispatch({ type: "SUCCESS_LOGIN", payload: response.data });
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("isLogin", true);
          localStorage.setItem("status", response.data.status);
        }
      })
      .catch(async () => {
        await alert("Password atau Username anda salah!")
      })
  };
};

// action creator
export const changeInputUser = (e) => {
  return {
    type: "CHANGE_INPUT_USER",
    payload: e,
  };
};


// function to signup
export const doSignUp = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      username: getState().user.namaPengguna,
      password: getState().user.kataKunci,
      status: getState().user.status
    }
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/client", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8"
        }
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_SIGNUP" });

      })
      .catch((error) => {
        console.log(error)
      })
  };
};


// function to logout
export const doLogOut = (e) => {
  localStorage.removeItem("token");
  localStorage.removeItem("isLogin");
  localStorage.removeItem("status");
  return {
    type: "LOGOUT",
    payload: e
  }
};


// function to get account type value in registration form
export const changeAccountType = (e) => {

  return {
    type: "CHANGE_ACCOUNT_TYPE",
    payload: e,
  };
};


// function to get user's data
export const getUserData = (props) => {
  return async (dispatch, getState) => {
    const status = localStorage.getItem("status");
    const token = localStorage.getItem("token");
    if (status === "buyer") {
      await axios
        .get("http://0.0.0.0:5050/customer/profile", {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          }
        })
        .then(async (response) => {
          dispatch({ type: "GET_USER_DATA", payload: response.data });

        })
        .catch((error) => {
          console.log(error)
        })
    } else if (status === "baker") {
      await axios
        .get("http://0.0.0.0:5050/baker/profile", {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          }
        })
        .then(async (response) => {
          dispatch({ type: "GET_USER_DATA", payload: response.data });

        })
        .catch((error) => {
          console.log(error)
        })
    }
  };
};


// function to post user's data
export const postUserData = (props) => {
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().user.name,
      email: getState().user.email,
      province: getState().user.province,
      city: getState().user.city,
      postal_code: getState().user.postal_code,
      city_type: getState().user.city_type,
      street: getState().user.street,
      phone: getState().user.phone,
    }
    const myJSON = JSON.stringify(bodyRequest);
    const status = localStorage.getItem("status");
    const token = localStorage.getItem("token");

    if (status === "buyer") {
      await axios
        .post("http://0.0.0.0:5050/customer/profile", myJSON, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          }
        })
        .then(async (response) => {
          dispatch({ type: "POST_USER_DATA" });

        })
        .catch((error) => {
          console.log(error)
        })
    } else if (status === "baker") {
      await axios
        .post("http://0.0.0.0:5050/baker/profile", myJSON, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          }
        })
        .then(async (response) => {
          dispatch({ type: "POST_USER_DATA" });

        })
        .catch((error) => {
          console.log(error)
        })
    }
  };
};
