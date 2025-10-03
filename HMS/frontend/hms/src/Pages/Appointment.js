import React from 'react'
import AppointmentForm from '../components/AppointmentForm'
import appointment from '../assets/appointment.avif'
import Hero from '../components/Hero'
const Appointment = () => {
  return (
    <>
    <Hero title={"Schedule Your Appointment | ZeeCare Medical Institute"} imageUrl={appointment}/>
    <AppointmentForm/>
    </>
  )
}

export default Appointment