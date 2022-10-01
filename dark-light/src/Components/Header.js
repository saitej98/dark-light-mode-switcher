import React from "react";
import ThemeToggler from "./ThemeToggler";

function Header() {
  return (
    <header>
      <h1>Theme Toggler</h1>
      <p>Click below icon to switch modes</p>
      <ThemeToggler />
    </header>
  );
}

export default Header;
