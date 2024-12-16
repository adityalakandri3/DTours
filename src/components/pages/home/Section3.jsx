import React from "react";
import IconCard from "./IconCard";
// import { useNavigate } from 'react-router-dom';

const Section3 = () => {
  // const navigate = useNavigate()
  const cardsData = [
    {
      image: "/images/bibimbap.png",
      title: "Good Foods",
      description:
        "Experience the joy of savoring local cuisines and authentic flavors from around the world, perfect for every food lover.",
    },
    {
      image: "/images/mountain.png",
      title: "Mountains",
      description:
        "Explore majestic mountains and enjoy breathtaking views, offering serenity and adventure for nature enthusiasts.",
    },
    {
      image: "/images/travel.png",
      title: "Travel",
      description:
        "Embark on exciting journeys to stunning destinations, creating unforgettable travel memories at every turn.",
    },
    {
      image: "/images/paragliding.png",
      title: "Paragliding",
      description:
        "Feel the thrill of flying high above scenic landscapes with exhilarating paragliding experiences for the adventurous spirit.",
    },
    {
      image: "/images/airplane.png",
      title: "Airplane",
      description:
        "Fly with ease and comfort to your dream destinations, making every trip seamless and stress-free.",
    },
    {
      image: "/images/hiking.png",
      title: "Hiking",
      description:
        "Discover scenic trails and embrace the beauty of nature with invigorating hikes for all skill levels.",
    },
  ];

  return (
    <>
      <section className="section3">
        <div className="container-3">
          <div className="section3-heading">
            <h2>Unforgettable Experiences Await</h2>
            <p>
              Embark on a journey to extraordinary destinations,where
              breathtaking landscapes<br/> and unique cultures come together.<br/> From
              serene coastlines to majestic peaks, every moment is a story
              waiting to be told. <br/>Discover, explore, and create memories that
              last a lifetime.
            </p>
          </div>
          <div className="row">
            {cardsData.map((card, index) => (
              <IconCard
                key={index}
                image={card.image}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section3;
