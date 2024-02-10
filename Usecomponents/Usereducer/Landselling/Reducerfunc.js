import React from "react";

const Reducerfunc = (state, action) => {
  switch (action.type) {
    case "buy":
      if (action.place && state.availableLand.includes(action.place)) {
        const updatedAvailableLand = state.availableLand.filter(
          (place) => place !== action.place
        );
        return {
          ...state,
          availableLand: updatedAvailableLand,
          ownedLand: [...state.ownedLand, action.place],
          funds: state.funds - 100,
        };
      } else {
        alert("Land is not available or invalid place!");
        return state;
      }
    case "sell":
      if (action.place && state.ownedLand.includes(action.place)) {
        const updatedOwnedLand = state.ownedLand.filter(
          (place) => place !== action.place
        );
        return {
          ...state,
          availableLand: [...state.availableLand, action.place],
          ownedLand: updatedOwnedLand,
          funds: state.funds + 100,
        };
      } else {
        alert("You do not own this land or invalid place!");
        return state;
      }
    default:
      return state;
  }
};

export default Reducerfunc;
