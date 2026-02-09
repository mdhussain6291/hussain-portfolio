import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/logo.svg.png";
import Button from "../button/button";

// Icons
import { FiHome, FiUser, FiFolder, FiFileText } from "react-icons/fi";

const Navbar = () => {

  const handleConnect = () => {
    window.location.href = "mailto:mdhussain6291@gmail.com";
  };

  return (
    <nav className="navbar">

      {/* Logo */}
      <img src={logo} alt="Logo" className="nav-logo" />

      {/* Menu */}
      <ul className="nav-menu">
        <li>
          <Link to="/">
            <FiHome className="nav-icon" /> Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FiUser className="nav-icon" /> About Me
          </Link>
        </li>
        <li>
          <Link to="/projects">
            <FiFolder className="nav-icon" /> Projects
          </Link>
        </li>
        <li>
          <Link to="/resume">
            <FiFileText className="nav-icon" /> Resume
          </Link>
        </li>
      </ul>

      {/* Button */}
      <Button text="Connect With Me" onClick={handleConnect} />

    </nav>
  );
};

export default Navbar;
