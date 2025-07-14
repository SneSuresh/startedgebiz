import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Company Info Section */}
        <div className="footer-section">
          <h3>STARTEDGEBIZ PVT LTD</h3>
          <h4>Corporate Office</h4>
          <div className="contact-info">
            <p><i className="fas fa-map-marker-alt"></i> 2nd Floor, Palathingal Building,</p>
            <p>Kochappilly Rd, Palarivattom,</p>
            <p>Ernakulam, Kerala 682025</p>
            <p><i className="fas fa-envelope"></i> connect@startedgebiz.com</p>
            <p><i className="fas fa-globe"></i> startedgebiz.com</p>
          </div>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <h3>QUICK LINKS</h3>
          <ul className="quick-links">
            <li><a href="/about">About Us</a></li>
            <li><a href="/services">Our Services</a></li>
            <li><a href="/industries">Industries</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact Us</a></li>
          </ul>
        </div>

        {/* GET IN TOUCH Section */}
        <div className="footer-section">
          <h3>CONNECT WITH US</h3>
          <h4>Follow Us On Social Media</h4>
          <p>Stay updated with our latest news and updates on social media.</p>
          <div className="social-links">
            <a href="https://facebook.com/YourPage" className="social-icon facebook" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a>
            <a href="https://twitter.com/YourProfile" className="social-icon twitter" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a>
            <a href="https://linkedin.com/in/YourProfile" className="social-icon linkedin" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://instagram.com/YourProfile" className="social-icon instagram" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Copyright © {new Date().getFullYear()} StartEdgeBiz, All rights reserved. Digitally Empowered by: RVIQ Softwares Pvt Ltd.</p>
      </div>
    </footer>
  );
};

export default Footer;
