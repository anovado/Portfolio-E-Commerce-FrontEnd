import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk";

import userReducer from './reducer/userReducer'
import productReducer from './reducer/productReducer'

const rootReducer = combineReducers({
    product: productReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})
export default store;