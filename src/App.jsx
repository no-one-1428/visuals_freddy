import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Imgslider from './components/image_slider/Imgslider'
import About from './components/about_me/About'
import Card from './components/card/Card'
function App() {
  return (
    <>
    <Navbar/>
    <Imgslider/> 
    <About/>
    <Card/>
    
    </>
  )
}

export default App
