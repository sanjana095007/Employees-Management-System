import React, { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const HeaderComponent = () => {

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className="navbar navbar-expand-lg p-3 shadow-sm">

        <div className="container">
          <a className="navbar-brand fw-bold">Employee Management System</a>

          <button className="btn btn-outline-primary" onClick={toggleTheme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default HeaderComponent;
