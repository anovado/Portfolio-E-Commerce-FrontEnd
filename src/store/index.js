import { createStore, applyMiddleware, combineReducers } from "redux"
import thunk from "redux-thunk";

import userReducer from './reducer/userReducer'
// import movieReducer from './reducer/movieReducer'

const rootReducer = combineReducers({
    // movie: movieReducer,
    user: userReducer
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
    console.log(store.getState())
})
export default store;