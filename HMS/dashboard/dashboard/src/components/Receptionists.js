import React from 'react'
import '../styles/Receptionists.css'
import { Link } from 'react-router-dom';
const Receptionists = () => {
    const receptionists = [
        {
          id: 1,
          firstName: 'Alice',
          lastName: 'Johnson',
        },
        {
          id: 2,
          firstName: 'Bob',
          lastName: 'Smith',
        },
        {
          id: 3,
          firstName: 'Catherine',
          lastName: 'Brown',
        },
        {
          id: 4,
          firstName: 'David',
          lastName: 'Wilson',
        },
        {
          id: 5,
          firstName: 'Emma',
          lastName: 'Davis',
        },
        // Add more receptionists as needed
      ];  
  return (
    <section className='parent-receptionists'>

    <div className="container-receptionists">
      <h1 className="page-title">Receptionists</h1>
      <ul>
        {receptionists.map((receptionist) => (
          <li key={receptionist.id}>
            {receptionist.firstName} {receptionist.lastName}
          </li>
        ))}
      </ul>
      <Link to="/add-receptionist">
        <div className="button-container">
          <button className="add-button">Add Receptionist</button>
        </div>
      </Link>
    </div>
    </section>
  )
}

export default Receptionists