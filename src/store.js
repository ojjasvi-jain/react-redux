import { createStore, combineReducers } from "redux";
import accountReducer from "./feactures/accounts/accountSlice";
import customerReducer from "./feactures/customers/CustomerSlice";

let rootReducer = combineReducers({ accountReducer, customerReducer });
let store = createStore(rootReducer);

export default store;
