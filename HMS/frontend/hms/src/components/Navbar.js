import React from 'react';
import logo1 from '../assets/logo3.png';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          <img src={logo1} alt="logo" className="logo-image" />
        </Link>
      </div>
      <input type="checkbox" id="nav-toggle" className="nav-toggle" />
      <label htmlFor="nav-toggle" className="nav-toggle-label">
        <span></span>
      </label>
      <div className="nav-links">
        <Link to="/" className="link" style={{margin:"5px"}}>Home</Link>
        <Link to="/appointment" className="link" style={{margin:"5px"}}>Appointment</Link>
        <Link to="/aboutus" className="link" style={{margin:"5px"}}>About</Link>
        <Link to="/login" className="button login-btn">Login</Link>
        <Link to="/register" className="button register-btn">Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
