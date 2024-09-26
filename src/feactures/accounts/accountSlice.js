let intialStateAccount = {
  balance: 0,
  loanPurpose: "",
  loan: 0,
};

let accountReducer = (state = intialStateAccount, action) => {
  console.log("===action", action);
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload.amount };

    case "account/senstionLoan":
      return {
        ...state,
        balance: state.balance + action.payload.loan,
        loanPurpose: action.payload.reason,
        loan: action.payload.loan,
      };

    case "account/repayLoan":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
        loan: state.loan - action.payload.amount,
        loanPurpose: "",
      };

    case "account/withdrawalAmountfn":
      return {
        ...state,
        balance: state.balance - action.payload.amount,
      };

    default:
      return state;
  }
};

export function deposite(amount) {
  return { type: "account/deposite", payload: { amount } };
}

export function senstionLoan(loan, reason) {
  return { type: "account/senstionLoan", payload: { loan, reason } };
}

export function repayLoan(amount) {
  return { type: "account/repayLoan", payload: { amount } };
}

export function withdrawalAmountfn(amount) {
  return { type: "account/withdrawalAmountfn", payload: { amount } };
}

export default accountReducer;
