import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome'
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Home'
import About from './About'


function App() {
  const userDetails = { firstName: "kiruthi", LastName: "kiruthika", phonenumber: 9576898074 }
  
  
  return (
    <div>
    
      <Home userDetails={userDetails}></Home><hr></hr>
      <About firstName ="Soumithra" LastName="Magathi"></About>
      
    
      </div>
  );
}

export default App
