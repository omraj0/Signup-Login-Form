import "./App.css";
import React, { useState } from 'react'
import Home from './pages/Home';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from './Components/Navbar';
import { Route, Routes } from "react-router-dom";

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);

  return ( 
    <div className="w-screen min-h-screen bg-richblack-900 flex flex-col">

      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

      <Routes>
        <Route path="/" element={<Home isLoggedIn={isLoggedIn} />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/signup" element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
      </Routes>

    </div>
  )
}

export default App