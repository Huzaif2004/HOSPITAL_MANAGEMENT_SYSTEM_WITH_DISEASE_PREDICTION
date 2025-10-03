import React from 'react'
import Hero from '../components/Hero'
import aboutus from '../assets/aboutus.jpg'
import Biography from '../components/Biography'
import biography from '../assets/biography.jpg'
const AboutUs = () => {
  return (
   <>
   <Hero 
   title={"Learn More About Us | ZeeCare Medical Institute"}
   imageUrl={aboutus}
   />
   <Biography imageUrl={biography}/>
   </>
  )
}

export default AboutUs