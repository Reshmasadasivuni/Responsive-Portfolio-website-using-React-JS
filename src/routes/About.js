import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import HerImg2 from '../components/HeroImg/HerImg2'
import AboutContent from '../components/About/AboutContent'


function About() {
  return (
    <div>
      <Navbar />
      <HerImg2 
      heading="ABOUT"
      text="User friendly Front-End works"/>
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About