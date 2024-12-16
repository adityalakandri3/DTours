import React from 'react'
import BlogImg from '/images/blog.jpg'
const Blog_Header = () => {
  return (
    <>
       <header className="header" style={{backgroundImage:`url(${BlogImg})`,height: '80vh'}} >
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">Blog</h1>
        <p className="subheading text-light">Creating Memories Through Travel and Discovery</p>
    </div>
      </header>
    </>
  )
}

export default Blog_Header
