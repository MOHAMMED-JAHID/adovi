import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => setUserData(response.data))
      .catch((error) => console.error("Error fetching user data:", error));
  }, []);

  return (
    <UserContext.Provider value={userData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
