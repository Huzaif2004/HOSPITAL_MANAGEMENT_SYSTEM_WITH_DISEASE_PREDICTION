import React from 'react'

import Hero from '../components/Hero'
import AppointmentForm from '../components/AppointmentForm'
import AboutUs from './AboutUs'
import Appointment from './Appointment'
import Department from '../components/Department'
import Login from './Login'
import Register from './Register'
import Biography from '../components/Biography'
import MessageForm from '../components/MessageForm'
import hero from '../assets/hero.png'
import bio from '../assets/biography.jpg'
const Home = () => {
  return (
    <>
    {/* <Department/> */}
    <Hero
        title={
          "Welcome to ZeeCare Medical Institute | Your Trusted Healthcare Provider"
        }
        imageUrl={hero}
      />
      <Biography imageUrl={bio}/>
      <Department/>
      <MessageForm/>
   
    </>
  )
}

export default Home