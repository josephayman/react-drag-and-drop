import React from "react";
import "../styles/Nav.css";

const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo" />
      </div>
      <div className="burger-menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};

export default Nav;
