
const initialState = {
  allClients: [],
  statusError: true,

};

export default function userReducer(dashboardState = initialState, action) {
  switch (action.type) {
    case "GET_ALL_CLIENT_DATA":
      return {
        ...dashboardState,
        statusError: false,
        allClients: action.payload,
      }
    case "CHANGE_INPUT_CLIENT":
      return {
        ...dashboardState,
        [action.payload.target.name]: action.payload.target.value
      }
    default:
      return dashboardState;
  }
}