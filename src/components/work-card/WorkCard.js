import "./WorkCardStyles.css"
import React from 'react'
import { NavLink } from "react-router-dom";

function WorkCard(props) {
  return (
    <div className="project-card">
      <img className="image" src={props.imgsrc} alt="project-image" />
      <h2 className="project-title">{props.title}</h2>
      <div className="pro-details">
        <p>{props.text}</p>
      <div className="pro-btns">
        <NavLink to={props.view} className="btn ">View</NavLink>
        <NavLink to="url.com" className="btn ">Source</NavLink>
      </div>
      </div>
    </div>
  )
}

export default WorkCard