import React from "react";

const AboutCard = ({ image, title, description }) => {
  return (
    <>
      

      <div className="about-card">
        <img src={image} alt="preview img" />
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className="card-text">{description}</p>
        </div>
      </div>
     
    </>
  );
};

export default AboutCard;
