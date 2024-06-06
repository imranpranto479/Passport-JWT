import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
const Register = () => {
  const navigate = useNavigate()
  const [username, setUsername] = useState("")
  const [password, SetPassword] = useState("")

  const handleRegister =()=>{
    axios.post("http://localhost:4000/register",{username, password})
    .then(()=>{

      console.log("user is registered")
      navigate("/login")
    })
    .catch((error)=>{
      console.log(error)
      navigate("/register")

    })
  }
  return (
    <div>
      <h2>
        Register  
      </h2>
      <input
      type = "text"
      placeholder='Username'
      value={username}
      onChange={(e)=>{
        setUsername(e.target.value)
      }}
      required
    />

<input
      type = "text"
      placeholder='Password'
      value={password}
      onChange={(e)=>{
        SetPassword(e.target.value)
      }}
      required
    />

    <button type='submit' onClick={handleRegister}>Register</button>
    </div>
  )
}

export default Register
