import React, { useRef, useEffect } from "react";

function Userefanimation() {
  const divRef = useRef(null);

  useEffect(() => {
    divRef.current.style.transition = "transform 1s ease-in-out";
    divRef.current.style.transform = "translateX(200px)";
  });

  return <div ref={divRef}>Animating Element</div>;
}

export default Userefanimation;
