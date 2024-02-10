import React from "react";
import { useDispatch } from "react-redux";
import { addRandom } from "./actions";

function RandomAdder() {
  const dispatch = useDispatch();

  const handleAddRandom = () => {
    const randomValue = Math.floor(Math.random() * 10) + 1;
    dispatch(addRandom(randomValue));
  };

  return (
    <div>
      <h2>Add Random Value</h2>
      <button onClick={handleAddRandom}>Add Random Value</button>
    </div>
  );
}

export default RandomAdder;
