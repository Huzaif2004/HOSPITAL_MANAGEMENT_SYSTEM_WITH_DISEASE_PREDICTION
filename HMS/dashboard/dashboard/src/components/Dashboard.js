import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";
import "../styles/Dashboard.css";

const Dashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/appointments", { withCredentials: true });
        setAppointments(response.data);
        console.log(appointments)
      } catch (error) {
        setError("Error fetching appointments.");
        toast.error(error.response?.data?.message || "Error fetching appointments.");
      } finally {
        setLoading(false);
      }
    };

    fetchAppointments();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <section className="dashboard page">
      <div className="banner">
        <div className="firstBox">
          <img src="https://img.freepik.com/free-vector/medical-workers-analyzing-electronic-record_1262-19834.jpg?t=st=1730563194~exp=1730566794~hmac=5cfbbc94517ecf88bec7d076b5be4d3eefc0223e9dda35d6630d640062dc778e&w=1380" alt="docImg" />
          <div className="content">
            <div>
              <p>Hello ,</p>
              <h5>Ahamed</h5>
            </div>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          </div>
        </div>
        <div className="secondBox">
          <p>Total Appointments</p>
          <h3>{appointments.length}</h3>
        </div>
        <div className="thirdBox">
          <p>Registered Doctors</p>
          <h3>7</h3>
        </div>
      </div>
      <div className="banner">
        <h5>Appointments</h5>
        <table>
          <thead>
            <tr>
              <th>Patient</th>
              <th>Date</th>
              <th>Doctor</th>
              <th>Department</th>
              <th>Status</th>
              <th>Visited</th>
            </tr>
          </thead>
          
          <tbody>
  {appointments.length > 0 ? (
    appointments.map((appointment) => (
      <tr key={appointment.id}>
        <td>{`${appointment?.patientFirstName} ${appointment?.patientLastName}`}</td>
        <td>{appointment?.appointmentDate?.substring(0, 16)}</td>
        <td>
          {`${appointment?.doctorName}`}
            
            
        </td>
        <td>{appointment?.department}</td>
        <td>
          <span>{appointment?.status}</span>
        </td>
        <td>
          {appointment?.hasVisited ? (
            <GoCheckCircleFill className="green" />
          ) : (
            <AiFillCloseCircle className="red" />
          )}
        </td>
      </tr>
    ))
  ) : (
    <tr>
      <td colSpan="6">No Appointments Found!</td>
    </tr>
  )}
</tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
