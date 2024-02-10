import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get("/api/user")
      .then((response) => setUser(response.data))
      .catch((error) => console.error("Error fetching user:", error));
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserProvider;
