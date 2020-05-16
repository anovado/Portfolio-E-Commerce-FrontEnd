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
      .get("http://0.0.0.0:5050/product", {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          // Authorization: `Bearer ${token}`,
        }
      })
      .then(async (response) => {
        console.warn("masuk getproduct data dalem asynbc")
        dispatch({ type: "GET_PRODUCT_DATA", payload: response.data });
      })
      .catch((error) => {
        console.log(error)
      })
  };
};


// function to post product data
export const postProductData = (props) => {
  console.log("masuk function post")
  return async (dispatch, getState) => {
    const bodyRequest = {
      name: getState().product.name,
      price: getState().product.price,
      weight: getState().product.weight,
      ingredients: getState().product.ingredients,
      promo: getState().product.promo,
      discount: getState().product.discount,
      image: getState().product.image,
      product_type_id: getState().product.product_type_id,
    }
    const myJSON = JSON.stringify(bodyRequest);
    const token = localStorage.getItem("token");
    console.log("masuk function post cek token", token)

    await axios
      .post("http://0.0.0.0:5050/product", myJSON, {
        headers: {
          "Content-Type": "application/json; charset=utf-8",
          Accept: "application/json; charset=utf-8",
          Authorization: `Bearer ${token}`,
        }
      })
      .then(async (response) => {
        dispatch({ type: "POST_PRODUCT_DATA" });
      })
      .catch((error) => {
        console.log(error)
      })
  };
};

// function to get product type id value in product input form
export const changeProductType = (e) => {
  console.log("value product type", e)

  return {
    type: "CHANGE_PRODUCT_TYPE",
    payload: e,
  };
};

// function to get promo status value in product input form
export const changePromo = (e) => {
  console.log("value promo status", e)

  return {
    type: "CHANGE_PROMO",
    payload: e,
  };
};


// function to handle category
export const handleRequestCategory = (categoryName) => {
  return async (dispatch) => {

    const response = await axios.get("http://0.0.0.0:5050/product")
    // dispatch({ type: "ACTIVATE_LOADING" });
    if (response.data.product_type_id !== undefined) {
      dispatch({
        type: "REQUEST_LIST_PRODUCTS",
        payload: response.data.product_type_id.filter(el => el.Category === categoryName)
      })

    }
  }
};

// function to handle get products by category
export const getProductsByCategory = (categoryName) => {
  return async (dispatch) => {
    console.warn("cek dari getProductsbycategory action", categoryName);
    const response = await axios.get("http://0.0.0.0:5050/product");
    console.log("response inside products by category", response)
    const filterCategory = response.data.filter((item) => {
      if (item.product_type_id == categoryName) {
        return item
      } else {
        return false
      }
    })
    console.log("filtercategory", filterCategory)
    dispatch({
      type: "REQUEST_LIST_PRODUCTS2",
      payload: filterCategory,
    });
  };
};

// function to get product by id
export const getRes = (category) => {
  console.warn("cek dari getRes action", category);
  return async (dispatch) => {
    const response = await axios.get("http://0.0.0.0:5050/product/" + category);

    dispatch({
      type: "REQUEST_LIST_PRODUCT_DETAILS",
      payload: response.data,
    });
  };
};
