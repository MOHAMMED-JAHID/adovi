// React with useRef
import React, { useRef, useState } from "react";

function FocusManager() {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);

  const handleClick = () => {
    setIsFocused(true);
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleClick}>Focus Input</button>
      <p>Is Input Focused: {isFocused ? "Yes" : "No"}</p>
    </div>
  );
}
