import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isSidebarOpen, toggleSidebar] = useState(false);
  const handleToggle = () => {
    toggleSidebar(!isSidebarOpen);
  };

  return (
    <nav>
      <div className="navbar">
        <div className="logo">Logo</div>
        <div className="menu">
          <li><Link to="/" className="hover">Home</Link></li>
          <li><Link to="/services" className="hover">Services</Link></li>
          <li><Link to="/" className="hover">Projects</Link></li>
          <li><Link to="/about" className="hover">About</Link></li>
          <li><Link to="/contact" className="contact">Contact</Link></li>
        </div>
        <span className="menu-icon" onClick={handleToggle}>menu</span>
      </div>

      {isSidebarOpen && (
        <div className="sidebar">
          <span className="close-icon" onClick={handleToggle}>close</span>
          <ul className="sidebar-menu">
            <li><Link to="/" className="hover">Home</Link></li>
            <li><Link to="/services" className="hover">Services</Link></li>
            <li><Link to="/" className="hover">Projects</Link></li>
            <li><Link to="/about" className="hover">About</Link></li>
            <li><Link to="/contact" className="contact">Contact</Link></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
