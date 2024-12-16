import React from "react";
import { Link } from "react-router-dom";

const Card = ({ image, title, description }) => {
  return (
      <Link to ="/gallery">
    <div className="card">
      <div className="image-box">
        <img src={image} alt={title} />
      </div>
      <div className="content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
      </Link>
  );
};

export default Card;
