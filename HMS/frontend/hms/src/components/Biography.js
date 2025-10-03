import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <>
    <div className='container biography'>
        <div className='banner'>
            <img src={imageUrl} alt="biography"/>
        </div>
        <div className='banner'>
        <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Welcome to Zeecare, where our mission is to provide compassionate, world-class healthcare services to individuals and families in a comfortable and caring environment. Founded with a vision to lead the way in medical excellence, we are dedicated to enhancing the well-being of our patients through a comprehensive approach to health and wellness.
          </p>
          <h3>Our Mission</h3>
          <p>
          At Zeecare, we believe in delivering healthcare that is accessible, reliable, and innovative. Our focus is on preventive care, effective treatment, and comprehensive patient support, ensuring that every patient feels valued and cared for throughout their journey with us.
          </p>
         

        </div>

    </div>
    </>
  )
}

export default Biography