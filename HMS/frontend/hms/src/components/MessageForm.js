import React from 'react'
import axios from 'react'
import { useState,useEffect } from 'react'
import {toast} from 'react-toastify'
const MessageForm = () => {
  const[firstName,setFirstName]=useState("");
  const[lastName,setLastName]=useState("");
  const[email,setEmail]=useState("");
  const[mobileNumber,setMobileNumber]=useState("");
  const [message, setMessage] = useState("");
  return (
    <>
       <div className='container form-component appointment-form'>
        <h2>Send Us a Message</h2>
        <form>
            <div>
                <input type="text" value={firstName} placeholder='First Name' onChange={(e)=>setFirstName(e.target.value)}/>
                <input type="text" value={lastName} placeholder='Last Name' onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div>
                <input type="email" value={email} placeholder='email' onChange={(e)=>setEmail(e.target.value)}/>
                <input type="number" value={mobileNumber} placeholder='Mobile Number' onChange={(e)=>setMobileNumber(e.target.value)}/>
            </div>
            <textarea row={7} value={message} placeholder='Message' onChange={(e)=>setMessage(e.target.value)}/>
            <div style={{ justifyContent: "center", alignItems: "center" }}>
            <button type="submit">Send</button>
          </div>   
        </form>

       </div>
    </>
  )
}

export default MessageForm