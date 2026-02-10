import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.svg.png";
import Button from "../button/button";

// Icons
import { FiHome, FiUser, FiFolder, FiFileText } from "react-icons/fi";

const Navbar = () => {
  // Mobile menu state
  const [menuOpen, setMenuOpen] = useState(false);

  // Open email client
  const handleConnect = () => {
    window.location.href = "mailto:mdhussain6291@gmail.com";
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Mobile menu toggle */}
      <div
        className="menu-toggle"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </div>

      {/* Navigation menu */}
      <ul className={`nav-menu ${menuOpen ? "active" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            <FiHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            <FiUser className="nav-icon" /> About Me
          </Link>
        </li>
        <li>
          <Link to="/projects" onClick={() => setMenuOpen(false)}>
            <FiFolder className="nav-icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/resume" onClick={() => setMenuOpen(false)}>
            <FiFileText className="nav-icon" /> Resume
          </Link>
        </li>
      </ul>

      {/* Connect button */}
      <Button text="Connect With Me" onClick={handleConnect} />

    </nav>
  );
};

export default Navbar;

