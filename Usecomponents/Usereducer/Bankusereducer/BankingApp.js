import React, { useReducer } from "react";
import Reducerfunc from "./Reducerfunc";

const BankingApp = () => {
  const initialState = {
    balance: 1000,
    transactions: [],
  };
  const [state, dispatch] = useReducer(Reducerfunc, initialState);

  const handleDeposit = () => {
    const amount = parseInt(prompt("Enter deposit amount:"));
    dispatch({ type: "deposit", amount });
  };

  const handleWithdraw = () => {
    const amount = parseInt(prompt("Enter withdrawal amount:"));
    if (amount <= state.balance) {
      dispatch({ type: "withdraw", amount });
    } else {
      alert("Insufficient funds!");
    }
  };

  const handleSavings = () => {
    dispatch({ type: "savings" });
    alert(`Your current balance is: $${state.balance}`);
  };

  return (
    <div>
      <h1>Banking App</h1>
      <h2>Balance: ${state.balance}</h2>
      <button onClick={handleDeposit}>Deposit</button>
      <button onClick={handleWithdraw}>Withdraw</button>
      <button onClick={handleSavings}>Check Savings</button>
      <h3>Transaction History:</h3>
      <ul>
        {state.transactions.map((transaction, index) => (
          <li key={index}>
            {transaction.type === "deposit" ? "Deposit" : "Withdrawal"} of $
            {transaction.amount} on {transaction.date.toString()}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BankingApp;
