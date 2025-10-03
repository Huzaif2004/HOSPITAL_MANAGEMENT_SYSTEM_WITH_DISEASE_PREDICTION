import React from 'react'
import hero from "../assets/hero.png"
const Hero = ({title,imageUrl}) => {
  const divStyle={
    color:"white"
  }  
  return (
    <>
    <div className='hero container'>
        <div className="banner">
            <h1 style={{color:"white"}}>{title}</h1>
            <p style={divStyle}>
            ZeeCare Medical Institute is a state-of-the-art facility dedicated
            to providing comprehensive healthcare services with compassion and
            expertise. Our team of skilled professionals is committed to
            delivering personalized care tailored to each patient's needs. At
            ZeeCare, we prioritize your well-being, ensuring a harmonious
            journey towards optimal health and wellness.
            </p>

        </div>
        <div className="banner">
            <img src={imageUrl} alt="hero" className='animated-image'/>
        </div>

    </div>
    </>
  )
}

export default Hero