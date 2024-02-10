import React, { useContext } from "react";
import { UserContext } from "./UserProvider";

const UserInfo = () => {
  const user = useContext(UserContext);

  return (
    <div>
      <h2>User Information</h2>
      {user && (
        <div>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
