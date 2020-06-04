import axios from "axios";

// action creator
export const changeInputProduct = (e) => {
  return {
    type: "CHANGE_INPUT_PRODUCT",
    payload: e,
  };
};

// function to get product data
export const getProductData = (props) => {
  return async (dispatch) => {
    // const token = localStorage.getItem("token");
    await axios
      .get("https://breadcrumbbe.andrenovado.my.id/product", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          // Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({ type: "GET_PRODUCT_DATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

// function to post product data
export const postProductData = (props) => {
  return async (dispatch, getState) => {
    // const category = getState().product.product_type_id;
    const promo = getState().product.promo;
    let input;
    if (promo === "true") {
      input = true;
    } else if (promo === "false") {
      input = false;
    } else {
      input = "";
    }
    const bodyRequest = {
      name: getState().product.name,
      price: getState().product.price,
      weight: getState().product.weight,
      ingredients: getState().product.ingredients,
      promo: input,
      discount: getState().product.discount,
      image: getState().product.image,
      product_type_id: getState().product.product_type_id,
    };
    const myJSON = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    const product_id = localStorage.getItem("product_id");
    if (product_id === null || product_id === undefined || product_id === "") {
      await axios
        .post("https://breadcrumbbe.andrenovado.my.id/product", myJSON, {
          headers: {
            "Content-Type": "application/json; charset=utf-8",
            Accept: "application/json; charset=utf-8",
            Authorization: `Bearer ${token}`,
          },
        })
        .then(async (response) => {
          dispatch({ type: "POST_PRODUCT_DATA" });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      await axios
        .patch(
          "https://breadcrumbbe.andrenovado.my.id/product/" + product_id,
          myJSON,
          {
            headers: {
              "Content-Type": "application/json; charset=utf-8",
              Accept: "application/json; charset=utf-8",
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(async (response) => {
          dispatch({ type: "PATCH_PRODUCT_DATA" });
          localStorage.removeItem("product_id");
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };
};

// function to get product type id value in product input form
export const changeProductType = (e) => {
  return {
    type: "CHANGE_PRODUCT_TYPE",
    payload: e,
  };
};

// function to get promo status value in product input form
export const changePromo = (e) => {
  return {
    type: "CHANGE_PROMO",
    payload: e,
  };
};

// function to handle category
export const handleRequestCategory = (categoryName) => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://breadcrumbbe.andrenovado.my.id/product"
    );
    // dispatch({ type: "ACTIVATE_LOADING" });
    if (response.data.product_type_id !== undefined) {
      dispatch({
        type: "REQUEST_LIST_PRODUCTS",
        payload: response.data.product_type_id.filter(
          (el) => el.Category === categoryName
        ),
      });
    }
  };
};

// function to handle get products by category
export const getProductsByCategory = (categoryName) => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://breadcrumbbe.andrenovado.my.id/product"
    );
    const filterCategory = response.data.filter((item) => {
      if (+item.product_type_id === +categoryName) {
        return item;
      } else {
        return false;
      }
    });
    dispatch({
      type: "REQUEST_LIST_PRODUCTS2",
      payload: filterCategory,
    });
  };
};

// function to get product by id
export const getRes = (category) => {
  return async (dispatch) => {
    const response = await axios.get(
      "https://breadcrumbbe.andrenovado.my.id/product/" + category
    );

    dispatch({
      type: "REQUEST_LIST_PRODUCT_DETAILS",
      payload: response.data,
    });
  };
};

// function to get product based on baker id
export const getProductBaker = () => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    await axios
      .get("https://breadcrumbbe.andrenovado.my.id/product/baker", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "REQUEST_LIST_PRODUCT_BAKER",
          payload: response.data,
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

// function to delete product based on baker id
export const deleteProductBaker = (id) => {
  const token = localStorage.getItem("token");
  return async (dispatch) => {
    await axios
      .delete("https://breadcrumbbe.andrenovado.my.id/product/" + id, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        },
      })
      .then(async (response) => {
        dispatch({
          type: "DELETE_PRODUCT_BAKER",
        });
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};
