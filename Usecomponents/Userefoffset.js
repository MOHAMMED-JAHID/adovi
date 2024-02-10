import React, { useRef, useEffect, useState } from "react";

function Userefoffset() {
  const [size, setSize] = useState({ width: 0, height: 0 });
  const divRef = useRef(null);

  useEffect(() => {
    setSize({
      width: divRef.current.offsetWidth,
      height: divRef.current.offsetHeight,
    });
  }, []);

  return (
    <div ref={divRef}>
      <p>Width: {size.width}px</p>
      <p>Height: {size.height}px</p>
    </div>
  );
}
export default Userefoffset;
