import axios from "axios";
import Product from "../../pages/Product";

// function to handle get products by category
export const getTransDetail = (props) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .get("http://0.0.0.0:5050/cart", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        }
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_GET_TRANSACTION", payload: response.data });
      })
      .catch((error) => {
        console.log(error)
      })
  };
};


// function to handle get products by category
export const postTransaction = (item) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      product_id: item,
      qty: 1,
      shipping_method_id: 1,
      payment_method_id: 1,

    }
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/cart", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        }
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST_TRANSACTION" });
      })
      .catch((error) => {
        console.log(error)
      })
  };
};


export const deleteTransaction = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .delete("http://0.0.0.0:5050/cart/" + item, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_DELETE_TRANSACTION" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const checkOut = () => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      status: false,
    };
    const myJSON = JSON.stringify(bodyRequest);
    await axios
      .post("http://0.0.0.0:5050/cart/checkout", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_CHEKOUT" });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};