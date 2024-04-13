import React from 'react'
import Navbar from "../components/navbar/Navbar"
import Footer from "../components/footer/Footer"
import HeroImg2 from "../components/HeroImg/HerImg2"
import PricingCard from '../components/pricing-cards/PricingCard'
import Work from '../components/work-card/Work'

function Project() {
  return (
    <div>
      <Navbar />
      <HeroImg2 
      heading="PROJECTS!!" 
      text="some of my works"/>
      <Work />
      <PricingCard />
      <Footer />
    </div>
  )
}

export default Project