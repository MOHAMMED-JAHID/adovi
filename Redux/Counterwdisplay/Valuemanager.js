import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addValue, popValue } from "./Actions";

function ValueManager() {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handlePush = () => {
    if (value.trim() !== "") {
      dispatch(addValue(Number(value)));
      setValue("");
    }
  };

  const handlePop = () => {
    dispatch(popValue());
  };

  return (
    <div>
      <h2>Value Manager</h2>
      <input type="number" value={value} onChange={handleChange} />
      <button onClick={handlePush}>Push</button>
      <button onClick={handlePop}>Pop</button>
    </div>
  );
}

export default ValueManager;
