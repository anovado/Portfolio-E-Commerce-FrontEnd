import axios from "axios";


// function to handle get products by category
export const getTransDetail = (props) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    console.log("didalam async gettrans", token)
    await axios
      .get("http://0.0.0.0:5050/cart", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        }
      })
      .then(async (response) => {
        // console.log("diatas dispatch")
        dispatch({ type: "SUCCESS_GET_TRANSDETAIL", payload: response.data });
      })
      .catch((error) => {
        console.log(error)
      })
  };
};


// function to handle get products by category
export const postTransDetail = (props) => {
  return async (dispatch, getState) => {
    const token = localStorage.getItem("token");
    const bodyRequest = {
      name: getState().user.name,
      qty: getState().user.qty,

    }
    const myJSON = JSON.stringify(bodyRequest);
    // const status = localStorage.getItem("status");

    await axios
      .post("http://0.0.0.0:5050/cart", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        }
      })
      .then(async (response) => {
        dispatch({ type: "SUCCESS_POST_TRANSDETAIL", payload: response.data });
      })
      .catch((error) => {
        console.log(error)
      })
  };
};