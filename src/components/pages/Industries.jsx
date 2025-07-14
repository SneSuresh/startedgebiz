import React, { useEffect } from 'react';
import './Industries.css';

const industries = [
  {
    name: 'Retail',
    icon: 'fas fa-shopping-cart',
    description: 'Optimizing operations, enhancing customer experience, and driving growth for retail businesses in a rapidly changing market.'
  },
  {
    name: 'Manufacturing',
    icon: 'fas fa-industry',
    description: 'Streamlining production, supply chain management, and digital transformation for manufacturers of all sizes.'
  },
  {
    name: 'Tech',
    icon: 'fas fa-laptop-code',
    description: 'Empowering technology companies with agile strategies, innovation, and scalable solutions for the digital era.'
  },
  {
    name: 'Finance',
    icon: 'fas fa-chart-line',
    description: 'Supporting financial institutions with compliance, risk management, and digital banking transformation.'
  }
];

const Industries = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="industries-page">
      <section className="industries-hero">
        <div className="industries-hero-content">
          <h1>Industry-Specific Expertise</h1>
          <p>StartEdgeBiz delivers tailored solutions for key industries to help you thrive in a competitive world.</p>
        </div>
      </section>
      <section className="industries-list-section">
        {industries.map((ind, idx) => (
          <div className="industry-section" key={ind.name}>
            <i className={ind.icon + ' industry-icon-large'}></i>
            <div className="industry-info">
              <h2>{ind.name}</h2>
              <p>{ind.description}</p>
            </div>
            {idx !== industries.length - 1 && <div className="industry-divider"></div>}
          </div>
        ))}
        <div className="industries-cta">
          <h2>Looking for expertise in your industry?</h2>
          <a href="/contact" className="contact-btn">Contact Us</a>
        </div>
      </section>
    </div>
  );
};

export default Industries; 