import React, { useRef } from "react";

function Userefocus() {
  const inputRef = useRef(null);
  console.log(inputRef.current);
  const handleClick = () => {
    inputRef.current.focus();
    console.log(inputRef.current.focus());
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}
export default Userefocus;
