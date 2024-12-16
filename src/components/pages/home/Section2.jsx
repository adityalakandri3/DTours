import React from "react";

const Section2 = ({heading,paragraph,image,video}) => {
  
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
           {video}
          </div>
        </div>
      </section>
    </>
  );
};

export default Section2;
