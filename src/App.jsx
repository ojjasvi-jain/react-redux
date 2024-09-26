import "./App.css";
import { useSelector } from "react-redux";
import AccountOperations from "./feactures/accounts/AccountOperations";
import BalanceDisplay from "./feactures/accounts/BalaceDisplay";
import Customer from "./feactures/customers/Customer";
import Header from "./components/header";

function App() {
  const fullName = useSelector((store) => store.customerReducer.fullName);
  return (
    <>
      <Header />
      {fullName !== "" ? (
        <>
          <AccountOperations />
          <BalanceDisplay />
        </>
      ) : (
        <Customer />
      )}
    </>
  );
}

export default App;
