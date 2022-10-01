import React, { useState } from "react";
import ThemeContext from "../Context/Themecontext";
import { FaSun, FaMoon } from "react-icons/fa";

function ThemeToggler() {
  const [thememode, setThememode] = useContext(ThemeContext);
  return (
    <div
      style={{ cursor: "pointer" }}
      onClick={() => {
        setThememode(thememode === "light" ? "dark" : "light");
      }}
    >
      <p>{thememode === "light" ? <FaMoon /> : <FaSun />}</p>
    </div>
  );
}

export default ThemeToggler;
