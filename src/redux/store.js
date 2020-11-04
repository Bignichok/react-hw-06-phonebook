import { createStore } from "redux";
import phoneBookReducers from "./phoneBook/phoneBookReducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  phoneBook: phoneBookReducers,
});

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
