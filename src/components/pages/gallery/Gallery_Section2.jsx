import React from "react";
import { Link } from "react-router-dom";

const Gallery_Section2 = () => {
  const places = [
    {
      name: "Lamahatta",
      image: "/images/galleryImg/fgallery1.jpg",
      link: "/details",
    },
    {
      name: "Japanese Temple",
      image: "/images/galleryImg/fgallery2.jpg",
      link: "/details",
    },
    {
      name: "Batasia Loop",
      image: "/images/galleryImg/fgallery3.jpg",
      link: "/details",
    },
    {
      name: "Chowrasta",
      image: "/images/galleryImg/fgallery4.jpg",
      link: "/details",
    },
    {
      name: "Darjeeling Himalayan Railway ",
      image: "/images/galleryImg/fgallery5.jpg",
      link: "/details",
    },
    {
      name: "Chatakpur",
      image: "/images/galleryImg/fgallery6.jpg",
      link: "/details",
    },
    {
      name: "Dudhia",
      image: "/images/galleryImg/fgallery7.jpg",
      link: "/details",
    },
    {
      name: "Rock Garden",
      image: "/images/galleryImg/fgallery8.jpg",
      link: "/details",
    },
  ];

  return (
    <div className="gallery-container">
      {places &&
        places.map((place, index) => (
          <div key={index} className="gallery-card">
            <img
              src={place.image}
              alt={place.name}
              className="gallery-card-image"
            />
            <div className="gallery-card-overlay">
              <h3 className="gallery-card-title">{place.name}</h3>
              <Link to={place.link} className="view-more-button">
                View More
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Gallery_Section2;
