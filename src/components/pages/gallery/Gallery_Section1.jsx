import React from 'react'
import GalleryImg from '/images/gallery2.jpg'

const Gallery_Section1 = () => {
  return (
    <>
     <header className="header" style={{backgroundImage:`url(${GalleryImg})`,height: '80vh'}} >
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">Gallery</h1>
        <p className="subheading text-light">We are always there for you.</p>
    </div>
      </header>
    </>
  )
}

export default Gallery_Section1
