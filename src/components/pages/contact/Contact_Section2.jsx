import React from "react";
import toast from "react-hot-toast";

const Contact_Section2 = () => {
  const handleFormSubmit = () => {
    
    toast.success("Message sent successfully!");
  };

  return (
    <section className="contact-section">
      <div className="contact-container">
        {/* Form Section */}
        <form className="form" onSubmit={handleFormSubmit}>
          <div className="contact-row">
            <div className="form-col1">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" />
            </div>
            <div className="form-col1">
              <label htmlFor="phone">Phone</label>
              <input type="text" id="phone" />
            </div>
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="text" id="email" />
          </div>
          <div className="form-row">
            <label htmlFor="message">Write Message</label>
            <textarea id="message" rows="8" cols="30" />
          </div>
          <input type="submit" value="Send Message" className="button" />
        </form>

        {/* Address Section */}
        <div className="address-col">
          <p>
            <span className="address-block">Address:</span>
            <span className="address">Chowk Bazar, Near Old Super Market, Darjeeling, 734001</span>
          </p>
          <p>
            <span className="address-block">Phone:</span>
            <span className="address">(+91)-9832259271</span>
          </p>
          <p>
            <span className="address-block">Email:</span>
            <span className="address">info@dtoursdarjeeling.com</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact_Section2;
