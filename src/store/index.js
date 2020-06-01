import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

import userReducer from "./reducer/userReducer";
import productReducer from "./reducer/productReducer";
import transactionReducer from "./reducer/transactionReducer";
import dashboardReducer from "./reducer/dashboardReducer";

const rootReducer = combineReducers({
  product: productReducer,
  user: userReducer,
  cart: transactionReducer,
  dashboard: dashboardReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});
export default store;
