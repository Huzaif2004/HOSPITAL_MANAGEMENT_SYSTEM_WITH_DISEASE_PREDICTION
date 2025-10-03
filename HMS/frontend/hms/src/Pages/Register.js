import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const[firstName,setFirstName]=useState("");  
  const[lastName,setLastName]=useState("");  
  const[email,setEmail]=useState("");  
  const[phoneNumber,setPhoneNumber]=useState(""); 
  const[password,setPassword]=useState(""); 
  const[dob,setDob]=useState(""); 
  const[gender,setGender]=useState(""); 
  const[nic,setNic]=useState(""); 
  const navigate=useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { firstName, lastName, email, phoneNumber, password, dob, gender, nic };
  
    try {
      const response = await fetch("http://localhost:8080/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });
  
      const data = await response.text();
      alert(data); // Show success or error message
      navigate("/")
    } catch (error) {
      console.error("Error:", error);
      alert("Registration failed");
    }
  };
  return (
    <>
    <div className="container form-component register-form">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <input type="text" placeholder="First Name" value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" placeholder="Last Name" value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div>
                <input type="email" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="number" placeholder="Phone Number" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
            </div>
            <div>
                <input type="number" placeholder="NIC" value={nic} onChange={(e)=>setNic(e.target.value)}/>
                <input type="date" placeholder="Date of Birth" value={dob} onChange={(e)=>setDob(e.target.value)}/>
            </div>
            <div>
                <select value={gender} onChange={(e)=>setGender(e.target.value)}>
                <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
                </select>
                <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            </div>
            <div style={{
              gap: "10px",
              justifyContent: "flex-end",
              flexDirection: "row",
            }}>
            <p style={{ marginBottom: 0 }}>Already Registered?</p>
            <Link
              to={"/signin"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Login Now
            </Link>
            </div>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Register</button>
          </div>
        </form>

    </div>
    </>
  )
}

export default Register