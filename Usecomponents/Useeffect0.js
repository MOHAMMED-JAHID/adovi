import React, { useEffect, useState } from "react";

function Useeffect0() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component re-rendered");
  }, []);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
}
export default Useeffect0;
