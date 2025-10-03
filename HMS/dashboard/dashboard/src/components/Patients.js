import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Patients.css'; // Import the CSS file

const Patients = () => {
  const patients = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      phone: '123-456-7890',
      dateOfBirth: '1985-04-23',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      phone: '098-765-4321',
      dateOfBirth: '1990-12-15',
    },
    {
      id: 3,
      firstName: 'Michael',
      lastName: 'Johnson',
      email: 'michael.johnson@example.com',
      phone: '456-789-0123',
      dateOfBirth: '1978-07-30',
    },
    // Add more patients as needed
  ];

  return (
    < section className='parent'>
    <div className="container-patient">
      <h1 className='page-title'>Patients</h1>
      <ul>
        {patients.length > 0 ? (
          patients.map((patient) => (
            <li key={patient.id}>
              <strong>{patient.firstName} {patient.lastName}</strong><br />
              Email: {patient.email}<br />
              Phone: {patient.phone}<br />
              Date of Birth: {patient.dateOfBirth}
            </li>
          ))
        ) : (
          <li className="no-patients">No patients found.</li>
        )}
      </ul>
      <Link to="/add-patient">
        <div className="button-container">
          <button className="add-button">Add Patient</button>
        </div>
      </Link>
    </div>
    </section>
  );
};

export default Patients;
