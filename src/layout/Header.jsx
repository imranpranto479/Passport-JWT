import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <Link to ="/">Home</Link> &nbsp;
      <Link to ="/register">Register</Link> &nbsp;
      <Link to ="/login">Login</Link>&nbsp;
      <Link to ="/profile">Profile</Link>
    </div>
  )
}

export default Header
