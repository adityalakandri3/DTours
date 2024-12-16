import React from 'react';
import { useLocation } from 'react-router-dom';
import SignupImg from '/images/signup.jpg';
import SigninImg from '/images/signin.jpg';

const AuthHeader = () => {
  const location = useLocation();


  const type = location.pathname.includes('signup') ? 'signup' : 'signin';

  let image, heading, subheading;

  if (type === 'signup') {
    image = SignupImg;
    heading = 'Sign Up';
    subheading = 'Join us and start your journey.';
  } else if (type === 'signin') {
    image = SigninImg;
    heading = 'Sign In';
    subheading = 'Welcome back! Please log in.';
  }

  return (
    <header
      className="header"
      style={{
        backgroundImage: `url(${image})`,
        height: '80vh',
      }}
    >
      <div className="header-content">
        <h1 className="lg-heading text-light main-heading">{heading}</h1>
        <p className="subheading text-light">{subheading}</p>
      </div>
    </header>
  );
};

export default AuthHeader;
