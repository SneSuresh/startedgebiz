import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
//  import logoCropped from '../images/logo_croped.jpg';

const Header = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 991);
  const closeTimeout = useRef();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 991);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsServicesOpen(true);
  };
  const handleMouseLeave = () => {
    closeTimeout.current = setTimeout(() => setIsServicesOpen(false), 150);
  };

  return (
    <header className="header">
      <div className="header-content">
        {/* Left side - Company name and tagline */}
        <div className="brand-section">
          <Link to="/" className="brand-link">
            <img src="/images/logo_croped.jpg" alt="StartEdgeBiz Logo" className="brand-logo" />
            
          </Link>
        </div>

        {/* Burger button for mobile */}
        <button
          className={`burger-menu${isNavOpen ? ' open' : ''}`}
          aria-label="Toggle navigation menu"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
          <span className="burger-bar"></span>
        </button>

        {/* Right side - Navigation */}
        <nav className={`nav-menu${isNavOpen ? ' open' : ''}`}>
          <Link to="/" className="nav-item" onClick={() => setIsNavOpen(false)}>
            <i className="fas fa-home"></i>
            Home
          </Link>
          <Link to="/about" className="nav-item" onClick={() => setIsNavOpen(false)}>
            <i className="fas fa-info-circle"></i>
            About Us
          </Link>
          <div 
            className={`nav-item services-dropdown ${isServicesOpen ? 'open' : ''}`}
            onMouseEnter={!isMobile ? handleMouseEnter : undefined}
            onMouseLeave={!isMobile ? handleMouseLeave : undefined}
            onClick={isMobile ? () => setIsServicesOpen((prev) => !prev) : undefined}
          >
            <span className="nav-link">
              <i className="fas fa-cogs"></i>
              Services
              <i className="fas fa-chevron-down"></i>
            </span>
            {isServicesOpen && (
              <div className="dropdown-menu"
                onMouseEnter={!isMobile ? handleMouseEnter : undefined}
                onMouseLeave={!isMobile ? handleMouseLeave : undefined}
              >
                <Link to="/services/incoportion" onClick={() => { setIsNavOpen(false); setIsServicesOpen(false); }}>Incoportion</Link>
                <Link to="/services/trademark" onClick={() => { setIsNavOpen(false); setIsServicesOpen(false); }}>Trademark</Link>
                <Link to="/services/taxes" onClick={() => { setIsNavOpen(false); setIsServicesOpen(false); }}>Taxes</Link>
                <Link to="/services/accounting" onClick={() => { setIsNavOpen(false); setIsServicesOpen(false); }}>Accounting Services</Link>
                <Link to="/services/business-loan" onClick={() => { setIsNavOpen(false); setIsServicesOpen(false); }}>Business Loan</Link>
                <Link to="/services/office-solutions" onClick={() => { setIsNavOpen(false); setIsServicesOpen(false); }}>Office Solutions</Link>
                <Link to="/services/technology-integration" onClick={() => { setIsNavOpen(false); setIsServicesOpen(false); }}>Technology Integration</Link>
              </div>
            )}
          </div>
          <Link to="/industries" className="nav-item" onClick={() => setIsNavOpen(false)}>
            <i className="fas fa-industry"></i>
            Industries
          </Link>
          <Link to="/blog" className="nav-item" onClick={() => setIsNavOpen(false)}>
            <i className="fas fa-blog"></i>
            Blog
          </Link>
          <Link to="/contact" className="nav-item" onClick={() => setIsNavOpen(false)}>
            <i className="fas fa-envelope"></i>
            Contact Us
          </Link>
          <Link to="/login" className="client-login" onClick={() => setIsNavOpen(false)}>
            <i className="fas fa-user"></i>
            Sign In
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;