import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Education from './Education'
import Project from './Project'
import Contact from './Contact'



export default function Page() {
  return (
    <div className='Page'>
        <Navbar/>
        <div className='Mainclass'>
        <Home/>
        <About/>
        <Education/>
        <Project/>
        <Contact/>
        </div>
        
    </div>
  )
}
