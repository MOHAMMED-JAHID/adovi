import React, { useState } from "react";

function Counter() {
  // Define state for count
  const [count, setCount] = useState(0);

  // Function to handle increment
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Function to handle decrement
  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}

export default Counter;
