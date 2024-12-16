import React, { useState } from "react";
import Card from "./Card";

// import 'bootstrap/dist/css/bootstrap.min.css';

const Section4 = () => {
  const cardImages = [
    {
      image: "/images/carousel1.jpg",
      title: "Lamahatta",
      description: "View More",
    },
    {
      image: "/images/carousel2.jpg",
      title: "Chowrasta",
      description: "View More",
    },
    {
      image: "/images/carousel3.jpg",
      title: "Japanese Temple",
      description: "View More",
    },
    {
      image: "/images/carousel4.jpg",
      title: "Batasia Loop",
      description: "View More",
    },
    {
      image: "/images/carousel5.jpg",
      title: "Mahakal Temple",
      description: "View More",
    },
    {
      image: "/images/carousel6.jpg",
      title: "Chatakpur",
      description: "View More",
    },
    {
      image: "/images/carousel7.jpg",
      title: "Dudhia",
      description: "View More",
    },
    {
      image: "/images/carousel8.jpg",
      title: "Rock Garden",
      description: "View More",
    },
  ];

  return (
    <>
      <section className="section4">
        <div className="container-3">
          <div className="section4-heading">
            <h2>A Glimpse of Nature's Beauty</h2>
            <p>
              Immerse yourself in the wonders of nature, where vibrant
              landscapes and serene vistas captivate the soul. <br /> Discover
              tranquil forests, majestic mountains, and breathtaking views{" "}
              <br /> that inspire peace and adventure alike.
            </p>
          </div>
        </div>
        <div className="card-container">
          {cardImages.map((card, index) => (
            <Card
              key={index}
              image={card.image}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Section4;
