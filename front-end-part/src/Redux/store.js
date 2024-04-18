import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./RootSlice"; // Ensure this path matches the actual location of your RootSlice file
import { combineReducers } from "redux";

const reducer = combineReducers({
  root: rootReducer,
});

const store = configureStore({
  reducer,
});

export default store;
