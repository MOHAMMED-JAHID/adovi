import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const ThirdEmptyComponent = () => {
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>Third Empty Component</h2>
      {userData && <p>Role: {userData.role}</p>}
    </div>
  );
};

export default ThirdEmptyComponent;
