import axios from "axios";

// function to post product type
export const postProductType = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      name: getState().dashboard.paymentMethod,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("https://breadcrumbbe.andrenovado.my.id/product_type", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// function to post payment metehod
export const postPaymentMethod = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      name: getState().dashboard.paymentMethod,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("https://breadcrumbbe.andrenovado.my.id/payment_method", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// function to post shipping method
export const postShippingMethod = () => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      courier: getState().dashboard.shippingMethod,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("https://breadcrumbbe.andrenovado.my.id/shipping", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// function to get client's data
export const getClientData = (props) => {
  return async (dispatch, getState) => {
    // const status = localStorage.getItem("status");
    const token = localStorage.getItem("token");

    await axios
      .get("https://breadcrumbbe.andrenovado.my.id/client", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "GET_ALL_CLIENT_DATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// function to delete client
export const deleteClient = (id) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    console.log("id dalam action", id);
    await axios
      .delete("https://breadcrumbbe.andrenovado.my.id/client/" + id, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_DELETE_CLIENT" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// action creator
export const changeInputClient = (e) => {
  return {
    type: "CHANGE_INPUT_CLIENT",
    payload: e,
  };
};
