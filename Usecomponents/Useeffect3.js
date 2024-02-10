import React, { useState, useEffect } from "react";

function Useeffect3() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log("Mounted");
      setCount((prevCount) => prevCount + 1);
    }, 1000);

    // Clean-up function to clear the interval when component unmounts or when the dependencies change
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this effect runs once after the component mounts

  return <h1>I have rendered {count} times!</h1>;
}

export default Useeffect3;

// Clear Interval
