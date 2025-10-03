import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/Doctors.css';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/doctors");
        setDoctors(response.data);
      } catch (error) {
        console.error("Error fetching doctors:", error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className="page doctors">
      <h1>DOCTORS</h1>
      <div className="banner">
        {doctors.map((doctor, index) => (
          <div className="card" key={index}>
            <img
              src={doctor.avatarUrl || "https://via.placeholder.com/150"}
              alt="Doctor"
            />
            <h4>{doctor.doctorName}</h4>
            <div className="details">
              <p>Email: <span>{doctor.email}</span></p>
              <p>Phone: <span>{doctor.phone}</span></p>
              <p>DOB: <span>{doctor.dob}</span></p>
              <p>Department: <span>{doctor.department}</span></p>
              <p>NIC: <span>{doctor.nic}</span></p>
              <p>Gender: <span>{doctor.gender}</span></p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
