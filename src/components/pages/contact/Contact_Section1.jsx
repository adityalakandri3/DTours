import React from 'react'
import ContactImg from '/images/contact.jpg'
const Contact_Section1 = () => {
  return (
    <>
      <header className="header" style={{backgroundImage:`url(${ContactImg})`,height: '80vh'}} >
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">Contact Us</h1>
        <p className="subheading text-light">We are always there for you.</p>
    </div>
      </header>
    </>
  )
}

export default Contact_Section1
