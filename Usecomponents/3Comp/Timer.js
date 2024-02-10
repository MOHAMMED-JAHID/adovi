import React, { useState, useEffect, useRef } from "react";

function RealtimeClock() {
  const [time, setTime] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  const formattedTime = time.toLocaleTimeString();

  return (
    <div>
      <h1>Real-time Clock</h1>
      <p>Current Time: {formattedTime}</p>
    </div>
  );
}

export default RealtimeClock;
