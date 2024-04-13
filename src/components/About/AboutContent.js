import "./AboutContentStyles.css"
import React1 from "../../assets/React1.jpeg"
import React2 from "../../assets/React2.jpeg"
import React from 'react'
import { Link } from 'react-router-dom'

function AboutContent() {
  return (
    
    <div className="about">
        <div className="left">
            <h1>About me ?!</h1>
            <p> I'm a front-End Developer.Currently working on React.js Technology.
                I create Responsive websites which are user friendly. 
            </p>
            <Link to="/contact">
                <button className="btn">Contact Details</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="React Image" />
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="React Image" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent