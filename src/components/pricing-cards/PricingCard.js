import "./PricingCardStyles.css"
import { Link } from "react-router-dom"
import React from 'react'

function PricingCard() {
  return (
    <div className="pricing">
        <div className="card-container">
            <div className="card">
                <h3>--Basic--</h3>
                <span className="bar"></span>
                <p className="btc">1000/-</p>
                <p>--5 Days--</p>
                <p>--6 pages--</p>
                <p>- Responsive -</p>
                <Link to="/contact" className="btn">Purchase Now </Link>
            </div>

            <div className="card">
                <h3>--Moderate--</h3>
                <span className="bar"></span>
                <p className="btc">1500/-</p>
                <p>--8 Days--</p>
                <p>--5 pages--</p>
                <p>- Responsive -</p>
                <Link to="/contact" className="btn">Purchase Now </Link>
            </div>

            <div className="card">
                <h3>--Advansed--</h3>
                <span className="bar"></span>
                <p className="btc">2500/-</p>
                <p>--10 Days--</p>
                <p>--8 pages--</p>
                <p>- Responsive -</p>
                <Link to="/contact" className="btn">Purchase Now </Link>
            </div>

        </div>
    </div>
  )
}

export default PricingCard