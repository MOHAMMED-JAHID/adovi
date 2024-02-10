import React, { useState, useEffect, useRef } from "react";

function RealtimeCounter() {
  const [count, setCount] = useState(0);
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <div>
      <h1>Real-time Counter</h1>
      <p>Count: {count}</p>
    </div>
  );
}

export default RealtimeCounter;
