import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import HerImg2 from '../components/HeroImg/HerImg2'
import Form from "../components/form/Form"

function Contact() {
  return (
    <div>
      <Navbar />
      <HerImg2
      heading="CONTACT"
      text="I have all ear's"/>
      <Form />
      <Footer />
    </div>
  )
}

export default Contact