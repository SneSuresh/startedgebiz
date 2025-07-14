import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import LandingPages from '../LandingPages';

const HomePage = () => {
  return (
    <div className="home-page">
      <div className="hero-section">
        <div className="hero-content">
          <h1>Transforming Ideas into Business Success</h1>
          <p>StartEdge Biz Consultancy is your partner in building and scaling successful enterprises.</p>
          <div className="hero-buttons">
            <Link to="/contact" className="get-in-touch-btn">GET IN TOUCH</Link>
            <Link to="/about" className="learn-more-btn">LEARN MORE</Link>
          </div>
        </div>
      </div>
      {/* WhatsApp Integration */}
      <div className="whatsapp-float">
        <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-whatsapp"></i>
        </a>
      </div>
    </div>
  );
};

export default HomePage; 