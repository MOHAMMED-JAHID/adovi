import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Useeffect2() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Mounted");
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []);

  return <h1>I have rendered {count} times!</h1>;
}

export default Useeffect2;
