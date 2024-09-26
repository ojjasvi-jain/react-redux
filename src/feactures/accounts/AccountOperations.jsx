import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  deposite,
  senstionLoan,
  repayLoan,
  withdrawalAmountfn,
} from "./accountSlice";

function AccountOperations() {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawalAmount, setWithdrawalAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurpose, setLoanPurpose] = useState("");
  const [currency, setCurrency] = useState("INR");

  let fullname = useSelector((state) => state.customerReducer.fullName);
  let { loan } = useSelector((state) => state.accountReducer);
  let dispatch = useDispatch();

  function handleDeposit() {
    if (!depositAmount) return;
    dispatch(deposite(depositAmount));
  }

  function handleWithdrawal() {
    if (withdrawalAmount && withdrawalAmount < depositAmount) {
      dispatch(withdrawalAmountfn(withdrawalAmount));
    }
  }

  function handleRequestLoan() {
    if (!loanAmount || !loanPurpose) return;

    dispatch(senstionLoan(loanAmount, loanPurpose));
  }

  function handlePayLoan() {
    if (!loanAmount) return;

    dispatch(repayLoan(loanAmount));
    setLoanPurpose("");
    setLoanAmount("");
  }

  return (
    <div>
      <h2>Your account operations</h2>

      <div className="inputs">
        <h3>Hello {fullname} !</h3>
        <div>
          <label>Deposit</label>
          <input
            type="number"
            value={depositAmount}
            onChange={(e) => setDepositAmount(+e.target.value)}
          />
          <select
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="INR">Indian currency</option>
            <option value="USD">US Dollar</option>
            <option value="EUR">Euro</option>
            <option value="GBP">British Pound</option>
          </select>

          <button onClick={handleDeposit}>Deposit {depositAmount}</button>
        </div>

        <div>
          <label>Withdraw</label>
          <input
            type="number"
            value={withdrawalAmount}
            onChange={(e) => setWithdrawalAmount(+e.target.value)}
          />
          <button onClick={handleWithdrawal}>
            Withdraw {withdrawalAmount}
          </button>
        </div>

        <div>
          <label>Request loan</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(+e.target.value)}
            placeholder="Loan amount"
          />
          <input
            value={loanPurpose}
            onChange={(e) => setLoanPurpose(e.target.value)}
            placeholder="Loan purpose"
          />
          <button onClick={handleRequestLoan}>Request loan</button>
        </div>

        {loan > 0 && (
          <div>
            <span style={{ fontWeight: "800", color: "#ff0000ba" }}>
              Pay back ₹ {loan}
            </span>
            <button onClick={handlePayLoan}>Pay loan</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default AccountOperations;
