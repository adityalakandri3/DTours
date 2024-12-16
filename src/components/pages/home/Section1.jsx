import React from 'react'
import AboutImg from '/images/nag-BKoNnTNaWn8-unsplash.jpg'
import { Link } from 'react-router-dom'

const Section1 = () => {
  return (
    <header className="header" style={{backgroundImage:`url(${AboutImg})`, height: '95vh'}} >
       <div className="header-content">
        <h1 className="lg-heading text-light main-heading">Explore DTours</h1>
        <p className="subheading text-light">Travel Beyond Limits, Experience the Extraordinary</p>
        <Link to="/signup" className="btn btn-primary text-blue md-heading">Explore more</Link>
    </div>
    </header>
     
  )
}

export default Section1
