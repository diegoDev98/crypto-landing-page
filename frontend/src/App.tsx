import React, { useState,useEffect } from 'react'
import axios from 'axios';
import './App.css'
import { NavLink,NavBar,Logo,NavLinkContainer } from './styles/nav';
import MainSection from './components/landing-page/MainSection';
function App() {
  return (
    <div className="App">
        
        <div style={{overflowX:'hidden'}}>
        <MainSection></MainSection>

        </div>
    </div>
  )
}

export default App
