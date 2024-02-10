// React with useRef
import React, { useRef, useState } from "react";

function Userefcounter() {
  const renderCount = useRef(0);
  const [count, setCount] = useState(0);

  renderCount.current++;

  return (
    <div>
      <p>Render count: {renderCount.current}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
export default Userefcounter;
