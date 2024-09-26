import { useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "INR",
  }).format(value);
}

function BalanceDisplay() {
  let amount = useSelector((state) => state.accountReducer.balance);

  //   console.log("===amount", amount);
  return <div className="balance">{formatCurrency(amount)}</div>;
}

export default BalanceDisplay;
