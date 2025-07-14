// src/components/LandingPages.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './pages/HomePage.css';
// import why1 from '../images/why1.jpg';
// import avantageLogo from '../images/avantage-logo.svg';
// import wintec from '../images/wintec.png';
// import peachwoodLogo from '../images/Peachwood Logo-1.png';
// import accovanceNew from '../images/accovance_new.jpg';
// import blog2 from '../images/blog2.jpg';
// import blog3 from '../images/blog3.jpg';
// import blog4 from '../images/blog4.jpg';

const LandingPages = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="landing-pages">
      <section className="hero">
        <h1>
          Transforming Ideas into<br />
          Business Success
        </h1>
        <p>
          StartEdge Biz Consultancy is your partner in building and scaling successful enterprises. 
          We provide comprehensive business solutions with expertise in incorporation, compliance, 
          and growth strategies—enabling you to focus on what matters most.
        </p>
        <div className="hero-buttons">
          <Link to="/contact" className="btn-primary">Get in Touch</Link>
          <Link to="/about" className="btn-secondary">LEARN MORE</Link>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-us-section">
        <h2>Why Choose Us</h2>
        <div className="why-us-container">
          <div className="why-us-image">
            <img src="/images/why1.jpg" alt="Business Professionals" className="faq-image" />
          </div>
          <div className="why-us-cards">
            <div className="why-card animate-card">
              <div className="card-content">
                <div className="card-header">
                  <i className="fas fa-building"></i>
                  <h3>Complete Business Setup</h3>
                </div>
                <p>One-stop solution for company registration, GST, and trademark services</p>
              </div>
            </div>
            <div className="why-card animate-card">
              <div className="card-content">
                <div className="card-header">
                  <i className="fas fa-calculator"></i>
                  <h3>Financial Excellence</h3>
                </div>
                <p>Expert accounting, tax planning, and business loan assistance</p>
              </div>
            </div>
            <div className="why-card animate-card">
              <div className="card-content">
                <div className="card-header">
                  <i className="fas fa-globe"></i>
                  <h3>Global Business Solutions</h3>
                </div>
                <p>International expansion support and virtual office solutions</p>
              </div>
            </div>
            <div className="why-card animate-card">
              <div className="card-content">
                <div className="card-header">
                  <i className="fas fa-laptop"></i>
                  <h3>Technology Integration</h3>
                </div>
                <p>Modern tech solutions to streamline your business operations</p>
              </div>
            </div>
            <div className="why-card animate-card">
              <div className="card-content">
                <div className="card-header">
                  <i className="fas fa-chart-line"></i>
                  <h3>Strategic Growth</h3>
                </div>
                <p>Data-driven branding and marketing strategies for business expansion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-card">
            <i className="fas fa-chart-line"></i>
            <h3>Strategic Planning</h3>
            <p>Develop comprehensive business strategies to achieve your organizational goals</p>
          </div>
          <div className="service-card">
            <i className="fas fa-handshake"></i>
            <h3>Business Development</h3>
            <p>Identify and capitalize on new market opportunities and partnerships</p>
          </div>
          <div className="service-card">
            <i className="fas fa-globe"></i>
            <h3>International Expansion</h3>
            <p>Navigate global markets with our expert guidance and local insights</p>
          </div>
          <div className="service-card">
            <i className="fas fa-cogs"></i>
            <h3>Process Optimization</h3>
            <p>Streamline operations and improve efficiency across your organization</p>
          </div>
          <div className="service-card">
            <i className="fas fa-building"></i>
            <h3>Company Registration</h3>
            <p>Complete assistance in registering your company with all legal compliances</p>
          </div>
          <div className="service-card">
            <i className="fas fa-receipt"></i>
            <h3>GST Registration</h3>
            <p>Hassle-free GST registration and compliance services</p>
          </div>
          <div className="service-card">
            <i className="fas fa-trademark"></i>
            <h3>Trademark Registrations</h3>
            <p>Protect your brand identity with trademark registration services</p>
          </div>
          <div className="service-card">
            <i className="fas fa-money-check-alt"></i>
            <h3>Business Loans & Insurance Services</h3>
            <p>Comprehensive financial solutions for your business needs</p>
          </div>
          <div className="service-card">
            <i className="fas fa-calculator"></i>
            <h3>Accounting Services</h3>
            <p>Professional accounting and bookkeeping solutions</p>
          </div>
          <div className="service-card">
            <i className="fas fa-laptop-code"></i>
            <h3>Technology Integrations</h3>
            <p>Seamless integration of modern technology solutions</p>
          </div>
          <div className="service-card">
            <i className="fas fa-ad"></i>
            <h3>Branding & Advertising</h3>
            <p>Strategic branding and marketing solutions</p>
          </div>
          <div className="service-card">
            <i className="fas fa-laptop-house"></i>
            <h3>Virtual Office Solutions</h3>
            <p>Professional virtual office services for your business</p>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners-section">
        <div className="partners-description">
          <h2>Our Partners</h2>
          <p>
            At StartEdge Biz, we recognize that our partners are key drivers of our shared success. As we 
            expand globally, we are committed to building strong, meaningful collaborations that deliver 
            value across borders.
          </p>
        </div>
        <div className="partners-slider">
          <div className="slider-track">
            {/* First set of logos */}
            <div className="partner-logo">
              <img src="/images/wintec.png" alt="Wintec Logo" />
            </div>
            <div className="partner-logo">
               <img src="/images/Peachwood_Logo-1.png" alt="Peachwood Logo" /> 
            </div>
            <div className="partner-logo">
              <img src="/images/wintec.png" alt="Wintec Logo" /> 
            </div>
            <div className="partner-logo">
             <img src="/images/Peachwood_Logo-1.png" alt="Peachwood Logo" /> 
            </div>
            {/* Duplicate set for seamless loop */}
            <div className="partner-logo">
            <img src="/images/wintec.png" alt="Wintec Logo" />
            </div>
            <div className="partner-logo">
            <img src="/images/Peachwood_Logo-1.png" alt="Peachwood Logo" /> 
            </div>
            <div className="partner-logo">
            <img src="/images/wintec.png"  alt="Wintec Logo"  /> 
            </div>
            <div className="partner-logo">
            <img src="/images/Peachwood_Logo-1.png" alt="Peachwood Logo"/> 
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <h2>Latest Insights</h2>
        <div className="blog-grid">
          <div className="blog-card">
            <img src="/images/blog2.jpg" alt="Business Growth" className="blog-image" />
            <div className="blog-content">
              <div className="blog-date">March 15, 2024</div>
              <h3 className="blog-title">5 Key Strategies for Business Growth in 2024</h3>
              <p className="blog-excerpt">
                Discover the essential strategies that successful businesses are implementing to achieve 
                sustainable growth in today's dynamic market environment.
              </p>
              <a href="/blog/business-growth" className="blog-link">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="blog-card">
            <img src="/images/blog3.jpg" alt="Digital Transformation" className="blog-image" />
            <div className="blog-content">
              <div className="blog-date">March 10, 2024</div>
              <h3 className="blog-title">Digital Transformation: A Guide for Modern Businesses</h3>
              <p className="blog-excerpt">
                Learn how businesses are leveraging digital technologies to streamline operations and 
                enhance customer experience in the post-pandemic era.
              </p>
              <a href="/blog/digital-transformation" className="blog-link">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>

          <div className="blog-card">
            <img src="/images/blog4.jpg" alt="Digital Transformation" className="blog-image" />
           
            <div className="blog-content">
              <div className="blog-date">March 5, 2024</div>
              <h3 className="blog-title">Financial Planning for Startups: A Comprehensive Guide</h3>
              <p className="blog-excerpt">
                Expert insights on creating robust financial strategies that help startups navigate 
                challenges and secure sustainable growth.
              </p>
              <a href="/blog/financial-planning" className="blog-link">
                Read More <i className="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPages;
