// src/components/LaboratoryHome.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Laboratory.css';

const Laboratory = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[isLoggedIn,setIsLoggedIn]=useState(false);
  const nav=useNavigate()
  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here (e.g., API call)
    console.log('Email:', email, 'Password:', password);
    setModalOpen(false); // Close modal after login
    setEmail('');
    setPassword('');
    setIsLoggedIn(true);
    nav("/lab")

  };

  return (
    <div className="laboratory-home-container">
      <nav className="navbar">
        <h1>Laboratory Management System</h1>
        <div className="nav-links">
          <button className="nav-button" onClick={() => setModalOpen(true)}>Login</button>
          <Link to="/laboratory/diabetes">
            {isLoggedIn && <button className="nav-button" disabled={!isLoggedIn}>Diabetes Prediction</button>}
          </Link>
          <Link to="/laboratory/heart-disease">
            {isLoggedIn && <button className="nav-button" disabled={!isLoggedIn}>Heart Disease Prediction</button>}
          </Link>
        </div>
      </nav>

      <div className="content-container">
        <div className="image-section">
          <img src="https://img.freepik.com/free-photo/hand-with-protective-gloves-holding-blood-samples-covid-test_23-2148958363.jpg?t=st=1730570638~exp=1730574238~hmac=9a53f22bbe1c4252134d778045d35af7dc754e7fc191840d2a0a0067cc0d9e68&w=1060" alt="Laboratory" className="laboratory-image" />
        </div>
        <div className="info-section">
          <h2>Welcome to Our Laboratory</h2>
          <p>
            Our laboratory is dedicated to providing high-quality diagnostic services to ensure the health and
            well-being of our patients. With state-of-the-art technology and a team of experienced professionals,
            we deliver accurate results quickly and efficiently.
          </p>
          <p>
            We specialize in a range of tests, including blood tests, imaging, and screenings for various
            diseases. Your health is our priority, and we are committed to excellence in every service we offer.
          </p>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit">Login</button>
              <button type="button" className="close-modal" onClick={() => setModalOpen(false)}>Close</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Laboratory;
