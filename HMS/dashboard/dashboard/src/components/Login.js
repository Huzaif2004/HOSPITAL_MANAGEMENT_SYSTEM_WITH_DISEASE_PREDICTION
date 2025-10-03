import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const response = await fetch(`http://localhost:8080/api/admins/login?email=${email}&password=${password}`, {
      method: "POST",
  });
    if (response.ok) {
        alert("Login successful!");
        navigate("/")
    } else {
        alert("Invalid credentials");
    }
};


  return (
    <>
      <div className="container form-component login-form">
        <h2>Sign in</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
          <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
            <p style={{ marginBottom: 0 }}>Not Registered?</p>
            <Link to={"/register"} style={{ textDecoration: "none", color: "#271776ca" }}>
              Register Now
            </Link>
          </div>
          <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
