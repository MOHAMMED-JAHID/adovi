import React, { useState, useRef } from "react";

function Useref01() {
  const [countState, setCountState] = useState(0);
  const countRef = useRef(0);

  const incrementState = () => {
    setCountState((prevCount) => prevCount + 1);
  };

  const incrementRef = () => {
    countRef.current += 1;
  };

  console.log("Count (state):", countState);
  console.log("Count (ref):", countRef.current);

  return (
    <div>
      <button onClick={incrementState}>Increment (State)</button>
      <button onClick={incrementRef}>Increment (Ref)</button>
      <p>Count (State): {countState}</p>
      <p>Count (Ref): {countRef.current}</p>
    </div>
  );
}

export default Useref01;
