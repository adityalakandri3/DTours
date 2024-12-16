import React from 'react'
import AboutImg from '/images/joshua-earle--87JyMb9ZfU-unsplash.jpg'

const About_Section1 = () => {
  return (
    <header className="header" style={{backgroundImage:`url(${AboutImg})`,height: '80vh'}} >
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">About Us</h1>
        <p className="subheading text-light">This is who we are.</p>
    </div>
      </header>
  )
}

export default About_Section1
