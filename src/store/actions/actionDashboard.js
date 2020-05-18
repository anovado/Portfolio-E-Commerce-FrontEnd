import axios from "axios";


// // function to get client's data
// export const getClientData = (props) => {
//   return async (dispatch, getState) => {
//     // const status = localStorage.getItem("status");
//     const token = localStorage.getItem("token");

//     await axios
//       .get("http://0.0.0.0:5050/client", {
//         headers: {
//           "Content-Type": "application/json; charset=utf-8",
//           Accept: "application/json; charset=utf-8",
//           Authorization: `Bearer ${token}`,
//         }
//       })
//       .then(async (response) => {
//         dispatch({ type: "GET_ALL_CLIENT_DATA", payload: response.data });

//       })
//       .catch((error) => {
//         console.log(error)
//       })

//   };
// };


// function to handle get products by category
export const getClientData = (categoryName) => {
  return async (dispatch) => {
    const response = await axios.get("http://0.0.0.0:5050/client");
    const filterCategory = response.data.filter((item) => {
      if ((item.status === categoryName) || (item.username === categoryName)) {
        return item
      } else {
        return false
      }
    })
    dispatch({
      type: "GET_ALL_CLIENT_DATA",
      payload: filterCategory,
    });
  };
};


export const deleteClient = (item) => {
  return async (dispatch) => {
    const token = localStorage.getItem("token");
    await axios
      .delete("http://0.0.0.0:5050/client/" + item, {
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

