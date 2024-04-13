import "./FooterStyles.css"
import { FaFacebook, FaHome , FaLinkedin, FaMailBulk, FaPhone, FaTwitter } from "react-icons/fa"
import React from 'react'

function Footer() {
  return (
    <div className="footer">
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome size={40} style={{color:"#fff",marginRight:"2rem"}}/>
                    <div>
                     <p>8/195,Madhura Nagar</p>
                     <p>India</p>
                    </div>
                     
                 <div className="phone">
                    <p>
                    <FaPhone size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                    +91-9908240998
                    </p>
                  <div className="email">
                        <p>
                            <FaMailBulk size={20} style={{color:"#fff",marginRight:"2rem"}}/>
                            uno-portfolio@mail.com
                        </p>
                 </div>
                 </div>
                </div>
            </div>
            <div className="right">
                <h4>About the company</h4>
                <p>I am Reshma.This was my uno-portfolio app
                   dumping all projects.
                </p>
                <div className="social">
                <FaFacebook size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaTwitter size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                <FaLinkedin size={20} style={{color:"#fff",marginRight:"1rem"}}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer