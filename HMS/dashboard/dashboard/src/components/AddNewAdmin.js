import React, { useState } from 'react';
import '../styles/AddNewAdmin.css';

const AddNewAdmin = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [employeeId, setEmployeeId] = useState("");
  const [governmentId, setGovernmentId] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate passwords match before sending data
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    // Admin data object
    const newAdmin = {
      firstName,
      lastName,
      email,
      password,
      phoneNumber,
      employeeId,
      governmentId,
    };

    try {
      const response = await fetch('http://localhost:8080/api/admins/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newAdmin),
      });
    
      if (response.ok) {
        alert('Admin added successfully!');
        // Reset form fields
      } else {
        const errorMessage = await response.text();
        alert(`Failed to add admin: ${errorMessage}`);
        console.log(errorMessage)
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred while connecting to the server.');
    }
    
  };

  return (
    <section className='page1'>
      <section className='container form-component add-admin-form'>
        <h1 className='form-title'>ADD NEW ADMIN</h1>
        <form onSubmit={handleSubmit}>
          <div className='form-row'>
            <input type="text" value={firstName} placeholder='First Name' onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className='form-row'>
            <input type="text" value={lastName} placeholder='Last Name' onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className='form-row'>
            <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className='form-row'>
            <input type="tel" value={phoneNumber} placeholder='Phone Number' onChange={(e) => setPhoneNumber(e.target.value)} />
          </div>
          <div className='form-row'>
            <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className='form-row'>
            <input type="password" value={confirmPassword} placeholder='Confirm Password' onChange={(e) => setConfirmPassword(e.target.value)} />
          </div>
          <div className='form-row'>
            <input type="text" value={employeeId} placeholder='Employee ID' onChange={(e) => setEmployeeId(e.target.value)} />
          </div>
          <div className='form-row'>
            <input type="text" value={governmentId} placeholder='Government ID' onChange={(e) => setGovernmentId(e.target.value)} />
          </div>
          <button type="submit">Add Admin</button>
        </form>
      </section>
    </section>
  );
}

export default AddNewAdmin;
