import React, { useEffect } from 'react';
import './AboutUs.css';
// import about1 from '../../images/about1.jpg';

const AboutUs = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="about-hero-content">
          <h1>About StartEdgeBiz</h1>
          <p>Empowering Businesses Through Strategic Innovation</p>
        </div>
      </section>

      <section className="about-content">
        <div className="about-grid">
          <div className="about-text">
            <h2>Our Journey</h2>
            <p>
              At StartEdgeBiz, we've built our foundation on a simple yet powerful principle: 
              empowering businesses to reach their full potential. Since our inception, we've 
              been dedicated to providing innovative solutions that help companies navigate the 
              complexities of modern business landscapes.
            </p>
            <p>
              Our team of experienced consultants brings together decades of industry expertise, 
              offering insights and strategies that drive sustainable growth. We believe in 
              creating lasting partnerships with our clients, understanding their unique challenges, 
              and delivering tailored solutions that make a real difference.
            </p>
          </div>
          <div className="about-image">
            <img src="/images/about1.jpg" alt="StartEdge Biz Team" />
          </div>
        </div>

        <div className="about-values">
          <h2>Our Core Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h3>Integrity</h3>
              <p>We maintain the highest standards of professional integrity in all our interactions.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-lightbulb"></i>
              <h3>Innovation</h3>
              <p>We constantly evolve and adapt to bring cutting-edge solutions to our clients.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-users"></i>
              <h3>Collaboration</h3>
              <p>We believe in working together to achieve exceptional results.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-chart-line"></i>
              <h3>Excellence</h3>
              <p>We strive for excellence in every project we undertake.</p>
            </div>
          </div>
        </div>



        <div className="about-mission">
          <div className="mission-content">
            <h2>Our Mission</h2>
            <p>
              To empower businesses with innovative solutions and strategic guidance, enabling 
              them to thrive in an ever-evolving market. We are committed to delivering 
              excellence through our comprehensive range of services, from company incorporation 
              to digital transformation.
            </p>
            <a href="/contact" className="contact-btn">Get in Touch</a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 