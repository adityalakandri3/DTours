import React from 'react'
import ProfileImg from '/images/kelly-brito-6_oIX1MV8FM-unsplash.jpg'
const ProfileHeader = () => {
  return (
    <>
       <header className="header" style={{backgroundImage:`url(${ProfileImg})`,height: '80vh'}} >
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">Your Personal Space</h1>
        <p className="subheading text-light">Manage your account details and settings here.</p>
    </div>
      </header>
    </>
  )
}

export default ProfileHeader
