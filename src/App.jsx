import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Imgslider from './components/image_slider/Imgslider'
import About from './components/about_me/About'
import Card from './components/card/Card'
import Footer from './components/fotter/Fotter'
import Project_d from './components/project_display/Project_d'
function App() {
  return (
    <>
    <Navbar/>
    <Imgslider/> 
    <About/>
    <Card/>
    <div className='my_project_heading_in_main'> My Projects</div>
    <Project_d/>
    <Footer/>
    
    </>
  )
}

export default App
