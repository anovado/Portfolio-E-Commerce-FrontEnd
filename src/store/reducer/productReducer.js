const initialState = {
  token: "",
  statusError: true,
  allProducts: [],
  productDetails: [],
  productSeller: [],
  name: "",
  price: "",
  weight: "",
  ingredients: "",
  promo: false,
  discount: 0,
  image: "",
  product_type_id: 0,
};

export default function productReducer(productState = initialState, action) {
  switch (action.type) {
    case "CHANGE_INPUT_PRODUCT":
      return {
        ...productState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "CHANGE_PRODUCT_TYPE":
      return {
        ...productState,
        product_type_id: action.payload.target.value,
      };
    case "GET_PRODUCT_DATA":
      return {
        ...productState,
        name: action.payload.name,
        price: action.payload.prigetProductDatace,
        weight: action.payload.weight,
        ingredients: action.payload.ingredients,
        promo: action.payload.promo,
        discount: action.payload.discount,
        image: action.payload.image,
        product_type_id: action.payload.product_type_id,
        allProducts: action.payload,
      };
    case "POST_PRODUCT_DATA":
      return {
        ...productState,
        statusError: false,
      };
    case "PATCH_PRODUCT_DATA":
      return {
        ...productState,
        statusError: false,
      };
    case "CHANGE_PROMO":
      return {
        ...productState,
        promo: action.payload.target.value,
      };
    case "REQUEST_LIST_PRODUCTS":
      return {
        ...productState,
        statusError: false,
        // allProducts: action.payload,
      };
    case "REQUEST_LIST_PRODUCTS2":
      return {
        ...productState,
        statusError: false,
        allProducts: action.payload,
      };
    case "REQUEST_LIST_PRODUCT_DETAILS":
      return {
        ...productState,
        productDetails: action.payload,
      };
    case "REQUEST_LIST_PRODUCT_BAKER":
      return {
        ...productState,
        productSeller: action.payload,
        deleted: false,
      };
    case "DELETE_PRODUCT_BAKER":
      return {
        ...productState,
        deleted: true,
      };
    default:
      return productState;
  }
}
