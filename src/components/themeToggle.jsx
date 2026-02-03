import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
import moonIcon from "../assets/images/icon-moon.svg";
import sunIcon from "../assets/images/icon-sun.svg";

const ThemeToggle = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  return (
    <button onClick={toggleDarkMode}>
      <img
        src={darkMode ? sunIcon : moonIcon}
        alt={darkMode ? "Switch to light mode" : "Switch to dark mode"}
        className="bg-neutral-300 p-2 rounded-lg cursor-pointer dark:bg-neutral-700"
      />
    </button>
  );
};

export default ThemeToggle;
