let intialStateCustomer = {
  fullName: "",
  nationalId: "",
};

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

export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/createCustomer",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updatedetail(updatedName) {
  return { type: "customer/updatedetail", payload: { updatedName } };
}

export default customerReducer;
