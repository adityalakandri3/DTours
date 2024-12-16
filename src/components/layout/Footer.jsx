import React from "react";
import { Link } from "react-router-dom";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Footer = () => {
  return (
    <>
      <footer className="footer ">
        <div className="container">
          <div className="footer-row">
            <div className="footer-col">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <Link to="/about" className="nav-link">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="nav-link">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">
                    Help
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="nav-link">
                    Get More
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Support</h3>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/">Our Location</Link>
                </li>
                <li>
                  <Link to="/">Gallery</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h3>Contact Info</h3>
              <p>
                <span className="contact-span">Address:</span>
                <span>
                  Old Chawk Bazar, Near New Super Market, <br />
                  Darjeeling
                </span>
              </p>
              <p>
                <span className="contact-span">Phone:</span>
                <span> (+91)-9832259271</span>
              </p>
              <p>
                <span className="contact-span">Email:</span>
                <span>info@dtoursdarjeeling.com</span>
              </p>
            </div>
            <div className="footer-col">
              <h3>Subscribe</h3>
              <p>Sign up for our newsletter</p>
              <form action="" className="newsletter-form">
                <div className="form-control">
                  <input
                    type="email"
                    name=""
                    id=""
                    placeholder="Your email..."
                  />
                  <button type="submit">
                    <span className="fa fa-paper-plane"></span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="footer-row">
            
              <div className="footer-end">
                <p>
                © Copyright 2018. All Rights Reserved. <br/> Designed &amp; Developed by 
                <a href="#"> Dtours Darjeeling</a>
                <br />
                "Distributed by" 
                <a href=""> Darjeeling Tourism</a>
                </p>
                <p className="social-icons">
                  <a href="">
                    <span className="s-icons"><FacebookIcon/></span>
                  </a>
                  <a href="">
                    <span ><InstagramIcon/></span>
                  </a>
                  <a href="">
                    <span ><LinkedInIcon/></span>
                  </a>
                  <a href="">
                    <span ><YouTubeIcon/></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
      </footer>
    </>
  );
};

export default Footer;
