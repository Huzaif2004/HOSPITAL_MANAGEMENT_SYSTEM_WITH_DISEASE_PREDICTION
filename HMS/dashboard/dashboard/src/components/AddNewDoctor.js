import React, { useState } from 'react';
import '../styles/AddNewDoctor.css';
import axios from 'axios';

const AddNewDoctor = () => {
  const [doctorName, setDoctorName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [doctorDepartment, setDoctorDepartment] = useState("");
  const [docAvatar, setDocAvatar] = useState(null);
  const [docAvatarPreview, setDocAvatarPreview] = useState("");

  const departmentsArray = [
    "Pediatrics",
    "Orthopedics",
    "Cardiology",
    "Neurology",
    "Oncology",
    "Radiology",
    "Physical Therapy",
    "Dermatology",
    "ENT",
  ];

  const handleAvatar = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setDocAvatarPreview(reader.result);
      setDocAvatar(file);
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create FormData to send multipart data
    const formData = new FormData();
    
    formData.append("doctorName", doctorName);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("nic", nic);
    formData.append("dob", dob);
    formData.append("gender", gender);
    formData.append("password", password);
    formData.append("department", doctorDepartment);
    if (docAvatar) formData.append("avatar", docAvatar);

    // Log the form data for debugging
    for (let [key, value] of formData.entries()) {
      console.log(key, value);
    }

    try {
      // Post request to the backend
      const response = await axios.post("http://localhost:8080/api/doctors", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Doctor registered:", response.data);
    } catch (error) {
      console.error("Error registering doctor:", error.response ? error.response.data : error.message);
    }
  };

  return (
    <>
      <section className="page">
        <section className="container add-doctor-form">
          <h1 className="form-title">REGISTER A NEW DOCTOR</h1>
          <form onSubmit={handleSubmit}>
            <div className="first-wrapper">
              <img
                src={
                  docAvatarPreview
                    ? docAvatarPreview
                    : "https://img.freepik.com/free-photo/3d-illustration-smiling-businessman-wearing-white-suit-black-tie_1142-43332.jpg"
                }
                alt="Doctor Avatar"
                className="avatar-img"
              />
              <label htmlFor="avatar" className="avatar-label">
                Upload Avatar
              </label>
              <input
                type="file"
                id="avatar"
                onChange={handleAvatar}
                className="avatar-input"
              />
            </div>
            <div className="inputs">
              <input
                type="text"
                placeholder="Doctor Name"
                value={doctorName}
                onChange={(e) => setDoctorName(e.target.value)}
                className="input-field"
              />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="input-field"
              />
              <input
                type="tel"
                placeholder="Mobile Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="input-field"
              />
              <input
                type="text"
                placeholder="NIC"
                value={nic}
                onChange={(e) => setNic(e.target.value)}
                className="input-field"
              />
              <input
                type="date"
                placeholder="Date of Birth"
                value={dob}
                onChange={(e) => setDob(e.target.value)}
                className="input-field"
              />
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="input-field"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input-field"
              />
              <select
                value={doctorDepartment}
                onChange={(e) => setDoctorDepartment(e.target.value)}
                className="input-field"
              >
                <option value="">Select Department</option>
                {departmentsArray.map((depart, index) => (
                  <option value={depart} key={index}>
                    {depart}
                  </option>
                ))}
              </select>
              <button type="submit" className="submit-btn">
                Register New Doctor
              </button>
            </div>
          </form>
        </section>
      </section>
    </>
  );
};

export default AddNewDoctor;
