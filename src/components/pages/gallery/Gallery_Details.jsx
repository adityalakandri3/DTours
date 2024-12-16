import React from "react";
import { Outlet } from "react-router-dom";
import Gallery_Section1 from "./Gallery_Section1";

const Gallery_Details = () => {
  const images = [
    {
      src: "/images/galleryImages/lamahatta.jpg",
      alt: "Lamahatta",
      caption:
        "Lamahatta, a quiet village nestled in the Eastern Himalayas, is located 23 km from Darjeeling at an altitude of 5,700 feet. It became a popular eco-tourism spot after 2012 when the West Bengal Chief Minister recognized its scenic beauty. The village features an eco-park showcasing the regions biodiversity and offers stunning views of Mt. Kanchenjunga and surrounding valleys. With its peaceful atmosphere and absence of large hotels, Lamahatta promotes sustainable tourism through homestays and tents. The village is also home to the Lamahatta Monastery, adding to its cultural charm.",
    },
    {
      src: "/images/galleryImages/japanese-temple.jpg",
      alt: "Japanese Temple",
      caption: "The Japanese Peace Pagoda in Darjeeling is a beautiful Buddhist structure that symbolizes peace, harmony, and unity. Built by the Japanese Buddhist monk Nichidatsu Fuji in 1992, it was part of the global movement to promote peace after World War II. Situated atop a hill with a breathtaking view of the surrounding mountains, including the Kanchenjunga, the pagoda serves as a reminder of the importance of tranquility and meditation.",
    },
    {
      src: "/images/galleryImages/batasialoop.jpg",
      alt: "Batasia Loop",
      caption: "The Batasia Loop is a remarkable engineering marvel and a popular tourist attraction in Darjeeling. It is a unique circular railway track where the toy train spirals around, offering panoramic views of the surrounding mountains, including Kanchenjunga. The area also features a War Memorial dedicated to the Gorkha soldiers who sacrificed their lives during various wars.",
    },
    {
      src: "/images/galleryImages/chowrasta.jpg",
      alt: "Chowrasta",
      caption: "Chowrasta is the heart of Darjeeling, a vibrant open space that offers stunning views of the surrounding hills and valleys. Situated on Mall Road, its a favorite spot for locals and tourists to relax, shop, and enjoy local street food. The area is often filled with the sounds of local music and bustling with life.",
    },
    {
      src: "/images/galleryImages/chatakpur.jpg",
      alt: "Chatakpur",
      caption: "Located about 22 kilometers from Darjeeling, Chatakpur is a serene village set amidst lush forests and rolling hills. Known for its breathtaking views of the Kanchenjunga range and its peaceful environment, Chatakpur is a perfect escape for nature lovers and trekkers. The area is also home to various wildlife and bird species.",
    },
    {
      src: "/images/galleryImages/dudhia.jpg",
      alt: "Dudhia",
      caption: "Dudhia is a small and picturesque village near Darjeeling, known for its beautiful tea gardens and scenic landscapes. It offers a perfect blend of natural beauty and serenity, making it an ideal destination for those looking for tranquility. Visitors can enjoy walking through the tea estates and witness the traditional tea-making process.",
    },
    {
      src: "/images/galleryImages/mahakal-mandir.jpg",
      alt: "Mahakal Temple",
      caption: "The Mahakal Temple, located on a hilltop in Darjeeling, is a sacred shrine dedicated to Lord Shiva. It offers a peaceful ambiance and panoramic views of the town below. The temple is an important pilgrimage site and a great spot for those seeking spiritual solace amidst the stunning natural surroundings.",
    },
    {
      src: "/images/galleryImages/Rock-garden.jpg",
      alt: "Rock Garden",
      caption: "Darjeelings Rock Garden is a popular tourist spot known for its beautiful terraced rock formations, cascading waterfalls, and lush greenery. Its a tranquil spot to explore nature while enjoying the surrounding panoramic views. The Rock Garden is often combined with a visit to the nearby Ganga Maya Park.",
    },
    {
      src: "/images/galleryImages/dhr.jpg",
      alt: "Darjeeling Himalayan Railway",
      caption: "The Darjeeling Himalayan Railway, also known as the Toy Train, is a UNESCO World Heritage site. The toy train travels through picturesque landscapes, offering unique views of the hills and valleys of Darjeeling. It remains one of the oldest narrow-gauge railways in the world, providing a nostalgic and scenic ride",
    },
  ];
  return (
    <>
      <Gallery_Section1 />
      <div className="fancybox-gallery-container">
        <div className="fancybox-gallery-grid">
          {images.map((image, index) => (
            <a
              key={index}
              href={image.src}
              data-fancybox="gallery"
              data-caption={image.caption}
              className="fancybox-gallery-item"
            >
              <div className="image-container">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="fancybox-gallery-image"
                />
                <div className="overlay">
                  <span className="overlay-heading">{image.alt}</span>
                  <span className="overlay-text">{image.caption}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default Gallery_Details;
