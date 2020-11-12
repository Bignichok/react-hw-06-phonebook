import { configureStore } from "@reduxjs/toolkit";
import phoneBookReducers from "./phoneBook/phoneBookReducers";

const store = configureStore({
  reducer: {
    phoneBook: phoneBookReducers,
  },
});

export default store;
