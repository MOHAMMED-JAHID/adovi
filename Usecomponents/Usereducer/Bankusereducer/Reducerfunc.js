import React from "react";

const Reducerfunc = (state, action) => {
  switch (action.type) {
    case "deposit":
      return {
        ...state,
        balance: state.balance + action.amount,
        transactions: [
          ...state.transactions,
          { type: "deposit", amount: action.amount, date: new Date() },
        ],
      };
    case "withdraw":
      return {
        ...state,
        balance: state.balance - action.amount,
        transactions: [
          ...state.transactions,
          { type: "withdraw", amount: action.amount, date: new Date() },
        ],
      };
    case "savings":
      return state; // No state change needed, just to trigger rendering
    default:
      return state;
  }
};
export default Reducerfunc;
