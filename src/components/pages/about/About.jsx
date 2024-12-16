import React from "react";
import About_Section1 from "./About_Section1";
import Section2 from "../home/Section2";
import AboutImage from '/images/juan-puyo-ZBWP2h0L9Kw-unsplash.jpg'
import About_Section2 from "./About_Section2";
import About_Section3 from "./About_Section3";
const About = () => {
  const title = {
    heading: "Welcome to Our World of Adventure",
    paragraph:
      `Discover the stories that inspire journeys, far beyond the ordinary. Nestled between majestic landscapes and vibrant cultures, our mission is to bring the world closer to you. Explore, dream, and create unforgettable memories as you embark on adventures that leave a lasting impression.`,
    image: AboutImage
  };
  
  return (
    <>
      <About_Section1 />
      <About_Section2 heading={title.heading} paragraph={title.paragraph} image={title.image}/>
      <About_Section3/>
    </>
  );
};

export default About;
