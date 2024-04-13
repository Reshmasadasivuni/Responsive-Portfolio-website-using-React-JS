import "./HeroImgStyles.css"
import Hero from "../../assets/img2.webp"
import React from 'react'
import { Link } from "react-router-dom"

function HeroImg() {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src = {Hero} alt="HeroImage"/>
        </div>
        <div className="content">
            <h3>React Developers</h3>
            <>
            <Link to="/project" className="btn">Projects</Link>
            <Link to="/contact" className="btn btn-light">contact</Link>
            </>
        </div>
    </div>
  )
}

export default HeroImg