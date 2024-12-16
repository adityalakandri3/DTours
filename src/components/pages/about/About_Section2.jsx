import React from "react";

const About_Section2 = ({heading,paragraph,image}) => {
  
  return (
    <>
      <section className="responsive-section">
        <div className="container-2 section2">
          <div className="section2-img">
            <img src={image} alt="Decorative" />
          </div>
          <div className="section2-text">
            <h2>{heading}</h2>
            <p>
             {paragraph}
            </p>
            <a href="#" className="myButton">Learn More</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default About_Section2;
