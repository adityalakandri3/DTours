import React from "react";

const Section5 = () => {
  return (
    <section className="section5">
      <div className="container-3">
        <div className="section5-heading">
          <h2>Happy Customers</h2>
        </div>
        <div className="message-container">
          <div className="message">
            <img src="/images/user1.jpg" alt="User 1" />
            <p>
              "This trip exceeded all my expectations! The stunning views, comfortable accommodations, and excellent service made it an unforgettable experience. Highly recommended!"
            </p>
            <span>John Doe</span>
          </div>
          <div className="message">
            <img src="/images/user2.jpg" alt="User 2" />
            <p>
              "From the planning to the execution, everything was flawless. The team ensured every detail was perfect. I can't wait to book my next adventure with them!"
            </p>
            <span>Jane Smith</span>
          </div>
          <div className="message">
            <img src="/images/user3.jpg" alt="User 3" />
            <p>
              "Absolutely loved the experience! The destinations were breathtaking, and the guided tours added so much value. It was truly a trip of a lifetime."
            </p>
            <span>Sam Wilson</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
