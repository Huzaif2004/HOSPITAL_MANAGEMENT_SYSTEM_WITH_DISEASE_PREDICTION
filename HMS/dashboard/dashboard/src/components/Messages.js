import React from 'react'
import '../styles/Messages.css'
const Messages = () => {
    const messages = [
        {
          id: 1,
          firstName: "John",
          lastName: "Doe",
          email: "john.doe@example.com",
          phone: "123-456-7890",
          message: "Hello! I would like more information about your services.",
        },
        {
          id: 2,
          firstName: "Jane",
          lastName: "Smith",
          email: "jane.smith@example.com",
          phone: "098-765-4321",
          message: "Could you please help me with my recent order?",
        },
        {
          id: 3,
          firstName: "Alice",
          lastName: "Johnson",
          email: "alice.johnson@example.com",
          phone: "555-123-4567",
          message: "I'm interested in scheduling a consultation.",
        },
      ];
       
  return (
    <section className='page messages'>
        <h1>MESSAGE</h1>
        <div className='banner'>
            { messages && messages.length>0 ?(
                messages.map((element)=>{
                    return(
                          <div className='card' key={element.id}>
                              <div className='details'>
                              <p>
                    First Name: <span>{element.firstName}</span>
                  </p>
                  <p>
                    Last Name: <span>{element.lastName}</span>
                  </p>
                  <p>
                    Email: <span>{element.email}</span>
                  </p>
                  <p>
                    Phone: <span>{element.phone}</span>
                  </p>
                  <p>
                    Message: <span>{element.message}</span>
                  </p>
                               </div> 
                          </div>
                    )
                })
            ):(
                <h1>No Messages!</h1>
            )}
        </div>
    </section>
  )
}

export default Messages