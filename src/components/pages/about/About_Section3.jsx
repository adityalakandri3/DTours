import React from "react";
import AboutCard from "./AboutCard";

const About_Section3 = () => {
  const AboutCardImages = [
    {
      image: "/images/about1.jpg",
      title: "CEO, CO-FOUNDER",
      description: "Vince Richardson",
    },
    {
      image: "/images/about6.jpg",
      title: "CTO, CO-FOUNDER",
      description: "Jean Love",
    },
    {
      image: "/images/about3.jpg",
      title: "CFO, CO-FOUNDER",
      description: "Vince McMohan",
    },
    {
      image: "/images/about4.jpg",
      title: "MARKETER, CO-FOUNDER",
      description: "Vince Richardson",
    },
    {
      image: "/images/about5.jpg",
      title: "COO, CO-FOUNDER",
      description: "Bob Jones",
    },
    {
      image: "/images/about2.jpg",
      title: "CPO, CO-FOUNDER",
      description: "Jeff Stark",
    },
  ];

  return (
    <>
      <section className="section4">
        <div className="container-3">
          <div className="section4-heading">
            <h2>Meet Our Team</h2>
            <p>
              Our dedicated team of professionals is passionate about making
              your experiences extraordinary. <br />
              With expertise, creativity, and a love for adventure, we work
              tirelessly to turn your dreams into reality. <br />
              Together, we strive to deliver excellence in every journey.
            </p>
          </div>
        </div>

        <div className="aboutcard-container">
          {AboutCardImages.map((card, index) => (
            <AboutCard
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

export default About_Section3;
