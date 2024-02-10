import React, { useRef } from "react";

function Usereftimer() {
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      console.log("Timer is running...");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
    console.log("Timer stopped.");
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}
export default Usereftimer;
