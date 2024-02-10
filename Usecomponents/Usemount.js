import React, { useEffect } from "react";

function CleanupExample() {
  useEffect(() => {
    console.log("Component mounted");

    return () => {
      console.log("Component will unmount");
      // Perform cleanup actions here
    };
  }, []);

  return <div>Cleanup Example</div>;
}
