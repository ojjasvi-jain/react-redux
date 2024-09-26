// import { createStore, combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./feactures/accounts/accountSlice";
import customerReducer from "./feactures/customers/CustomerSlice";

// let rootReducer = combineReducers({ accountReducer, customerReducer });
let store = configureStore({
  reducer: { accountReducer, customerReducer },
});

export default store;
