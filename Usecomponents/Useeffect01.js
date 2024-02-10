import React, { useState, useEffect } from "react";

function Useeffect01() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Count changed:", count);
  });

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
    </div>
  );
}

export default Useeffect01;
