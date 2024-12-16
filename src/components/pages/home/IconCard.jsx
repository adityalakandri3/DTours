import React from "react";

const IconCard = ({ image, title, description }) => {
  return (
    <div className="col">
      <div className="icon-img">
        <img src={image} alt={title} />
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default IconCard;
