// - deposite
// - withdraw
// - requestLoan
// - payLoan

import { createStore, combineReducers } from "redux";

let intialStateAccount = {
  balance: 0,
  loanPurpose: "",
  loan: 0,
};

let intialStateCustomer = {
  fullName: "",
  nationalId: "",
};

// create new customer
// update customer name

let customerReducer = (state = intialStateCustomer, action) => {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
      };

    case "customer/updatedetail":
      return {
        ...state,
        fullName: action.payload.updatedName,
      };

    default:
      return state;
  }
};

let accountReducer = (state = intialStateAccount, action) => {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: action.payload.amount };

    case "account/senstionLoan":
      return {
        ...state,
        balance: state.balance - action.payload.loan,
        loanPurpose: action.payload.reason,
        loan: action.payload.loan,
      };

    case "account/repayLoan":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        loan: state.loan - action.payload.amount,
      };

    case "account/withdrawAmount":

    default:
      return state;
  }
};

let rootReducer = combineReducers({ accountReducer, customerReducer });

let store = createStore(rootReducer);

// account  functions

function deposite(amount) {
  return { type: "account/deposite", payload: { amount } };
}

function senstionLoan(loan, reason) {
  return { type: "account/senstionLoan", payload: { loan, reason } };
}

function repayLoan(amout) {
  return { type: "account/repayLoan", payload: { amout } };
}

// customer functions

function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updatedetail(updatedName) {
  return { type: "customer/updatedetail", payload: { updatedName } };
}

console.log(store.dispatch(deposite(5000)));
console.log("=====", store.getState());
console.log(store.dispatch(deposite(5000)));
console.log("=====", store.getState());
