import React from "react";
import { NavLink } from "react-router-dom";
import "./FloatingGlassNavbar.css";

const FloatingGlassNavbar: React.FC = () => {
  return (
    <nav className="glass-navbar">
      <div className="nav-content">
        <NavLink to="/" className="nav-link">
          Home
        </NavLink>
        {/* <NavLink to="/components" className="nav-link">
          Components
        </NavLink> */}
        <NavLink to="/projects" className="nav-link">
          Projects
        </NavLink>
      </div>
      <div className="flare-layer"></div>
    </nav>
  );
};

export default FloatingGlassNavbar;
