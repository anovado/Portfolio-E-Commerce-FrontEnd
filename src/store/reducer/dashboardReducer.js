const initialState = {
  allClients: [],
  statusError: true,
  paymentMethod: "",
  shippingMethod: "",
  productType: "",
};

export default function dashboardReducer(
  dashboardState = initialState,
  action
) {
  switch (action.type) {
    case "GET_ALL_CLIENT_DATA":
      return {
        ...dashboardState,
        statusError: false,
        allClients: action.payload,
        deleted: false,
      };
    case "CHANGE_INPUT_CLIENT":
      return {
        ...dashboardState,
        [action.payload.target.name]: action.payload.target.value,
      };
    case "SUCCESS_POST":
      return {
        ...dashboardState,
        statusError: false,
      };
    case "SUCCESS_DELETE_CLIENT":
      return {
        ...dashboardState,
        statusError: false,
        deleted: true,
      };
    default:
      return dashboardState;
  }
}
