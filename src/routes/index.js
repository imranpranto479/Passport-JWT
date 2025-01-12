import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Register from "../components/Register"
import Home from "../components/Home"
import Profile from "../components/Profile"
import Login from "../components/Login"
import Error from "../components/Error"
import Header from '../layout/Header'
const Index = () => {
  return (
    <BrowserRouter>
        <Header/>

    <Routes>
        <Route path = "/" element={<Home/>}/>

        <Route path = "/register" element={<Register/>}/>
        <Route path = "/login" element={<Login/>}/>
        <Route path = "/profile" element={<Profile/>}/>
        <Route path = "/*" element={<Error/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default Index
