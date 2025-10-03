import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AppointmentForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [nic, setNic] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [appointmentDate, setAppointmentDate] = useState("");
  const [department, setDepartment] = useState("Pediatrics");
  const [doctorName, setDoctorName] = useState("");
  
  const [address, setAddress] = useState("");
  const [hasVisited, setHasVisited] = useState(false);
  const [doctors, setDoctors] = useState([]);

  const departmentsArray = [
    "Pediatrics", "Orthopedics", "Cardiology", "Neurology",
    "Oncology", "Radiology", "Physical Therapy", "Dermatology", "ENT"
  ];

  useEffect(() => {
    // Fetch doctors from backend
    axios.get("http://localhost:8080/api/doctors")
      .then(response => {
        setDoctors(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error("Error fetching doctors:", error);
        toast.error("Could not load doctors.");
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const appointmentData = {
      patientFirstName: firstName,
      patientLastName: lastName,
      email,
      phone,
      nic,
      dob,
      gender,
      appointmentDate,
      department,
      doctorName,
      address,
      hasVisited
    };

    try {
      await axios.post("http://localhost:8080/api/appointments", appointmentData);
      toast.success("Appointment created successfully!");
      // Clear form after successful submission
      console.log(appointmentData);
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhone("");
      setNic("");
      setDob("");
      setGender("");
      setAppointmentDate("");
      setDepartment("Pediatrics");
      setDoctorName("");
      setAddress("");
      setHasVisited(false);
    } catch (error) {
      toast.error("Failed to create appointment. Please try again.");
      console.error("Appointment creation error:", error);
    }
  };



  return (
    <div className="container form-component appointment-form">
      <h2>Appointment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="number"
            placeholder="Mobile Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <input
            type="number"
            placeholder="NIC"
            value={nic}
            onChange={(e) => setNic(e.target.value)}
          />
          <input
            type="date"
            placeholder="Date of Birth"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </div>
        <div>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option>Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <input
            type="date"
            value={appointmentDate}
            placeholder="Appointment Date"
            onChange={(e) => setAppointmentDate(e.target.value)}
          />
        </div>
        <div>
          <select value={department} onChange={(e) => setDepartment(e.target.value)}>
            {departmentsArray.map((depart, index) => (
              <option value={depart} key={index}>{depart}</option>
            ))}
          </select>
          <select
  value={doctorName}
  onChange={(e) => setDoctorName(e.target.value)} // Update doctorName correctly
  disabled={!department}
>
  <option value="">Select Doctor</option>
  {doctors
    .filter((doctor) => doctor.department === department) // Only show doctors for the selected department
    .map((doctor, index) => (
      <option
        value={doctor.doctorName} // Ensure this value matches the actual doctor name field
        key={index}
      >
        {doctor.doctorName} {/* Display the doctor's name */}
      </option>
    ))}
</select>

        </div>
        <textarea
          rows="4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Address"
        />
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <label>Have you visited before?</label>
          <input
            type="checkbox"
            checked={hasVisited}
            onChange={(e) => setHasVisited(e.target.checked)}
          />
        </div>
        <button type="submit">GET APPOINTMENT</button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default AppointmentForm;
