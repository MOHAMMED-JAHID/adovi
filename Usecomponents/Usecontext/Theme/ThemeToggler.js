import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggler = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div>
      <h2>Theme Toggler</h2>
      <button onClick={toggleTheme}>Toggle Theme</button>
      <p>Current Theme: {theme}</p>
    </div>
  );
};

export default ThemeToggler;
