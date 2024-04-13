import React from 'react'
import Navbar from "../components/navbar/Navbar"
import HeroImg from "../components/HeroImg/HeroImg"
import Footer from "../components/footer/Footer"
import Work from "../components/work-card/Work"


function Home() {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  )
}

export default Home