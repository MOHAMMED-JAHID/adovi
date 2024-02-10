import React, { useReducer, useState } from "react";
import Reducerfunc from "./Reducerfunc";

const initialState = {
  availableLand: ["Farm", "Meadow", "Field", "Garden", "Orchard"],
  ownedLand: [],
  funds: 1000,
};

const LandMarketApp = () => {
  const [state, dispatch] = useReducer(Reducerfunc, initialState);
  const [selectedLand, setSelectedLand] = useState("");

  const handleBuy = () => {
    dispatch({ type: "buy", place: selectedLand });
    setSelectedLand("");
  };

  const handleSell = () => {
    dispatch({ type: "sell", place: selectedLand });
    setSelectedLand("");
  };

  const handleSelectChange = (e) => {
    setSelectedLand(e.target.value);
  };

  return (
    <div>
      <h1>Land Market App</h1>
      <h2>Available Land: {state.availableLand.join(", ")}</h2>
      <h2>Owned Land: {state.ownedLand.join(", ")}</h2>
      <h2>Funds: ${state.funds}</h2>
      <form>
        <label htmlFor="landSelect">Select Land:</label>
        <select
          id="landSelect"
          value={selectedLand}
          onChange={handleSelectChange}
        >
          <option value="">Select land...</option>
          {state.availableLand.map((place, index) => (
            <option key={index} value={place}>
              {place}
            </option>
          ))}
        </select>
      </form>
      <button onClick={handleBuy}>Buy Land</button>
      <button onClick={handleSell}>Sell Land</button>
    </div>
  );
};

export default LandMarketApp;
