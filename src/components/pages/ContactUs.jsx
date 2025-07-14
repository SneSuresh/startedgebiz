import React, { useState } from 'react';
import './ContactUs.css';
// import contact234 from '../../images/contact234.jpeg';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', subject: '', message: '' }); // Clear the form
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <div className="contact-hero">
        <div className="contact-hero-overlay">
          <h1>Get in Touch</h1>
          <p>We're here to help transform your business with innovative solutions and expert guidance</p>
        </div>
      </div>

      {/* Contact Details Section */}
      <section className="contact-details-section contact-dark-section">
        <div className="contact-details-grid">
          <div className="contact-details-left">
            <h2 className="lets-connect-title">Let's Connect</h2>
            <p className="lets-connect-subtitle">Ready to take your business to the next level? We're here to help you navigate the digital landscape and achieve your goals. Reach out to us through any of these channels:</p>
            <p className="lets-connect-extra">
              Have a question about our services? Need expert business advice? Or just want to say hello? Our team is here to help. We value every inquiry and respond promptly with the care and expertise you deserve.
            </p>
            <p className="lets-connect-extra">
              Let's start a conversation and build something great together!
            </p>
          </div>
          <div className="contact-details-right">
            <img src="/images/contact234.jpeg" alt="Our Office" className="contact-details-img" />
          </div>
        </div>
        <div className="contact-info-2x2-grid">
          <div className="contact-info-2x2-item">
            <span className="contact-circle-icon"><i className="fas fa-envelope"></i></span>
            <div className="contact-info-2x2-text">connect@startedgebiz.com<br/>support@startedgebiz.com</div>
          </div>
          <div className="contact-info-2x2-item">
            <span className="contact-circle-icon"><i className="fas fa-phone-alt"></i></span>
            <div className="contact-info-2x2-text">+91 95392 62408<br/>+ 91-7356173003</div>
          </div>
          <div className="contact-info-2x2-item">
            <span className="contact-circle-icon"><i className="fas fa-clock"></i></span>
            <div className="contact-info-2x2-text"> Monday - Friday<br/> 9:00 AM - 6:00 PM EST</div>
          </div>
          <div className="contact-info-2x2-item">
            <span className="contact-circle-icon"><i className="fas fa-map-marker-alt"></i></span>
            <div className="contact-info-2x2-text">StartEdgeBiz, 2nd Floor, Palathingal Building, Kochappilly Rd, Palarivattom, Ernakulam, Kerala 682025</div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-container">
        <div className="form-wrapper">
          <h2>Send Us a Message</h2>
          <p>Have a question or want to discuss a project? Fill out the form below and we'll get back to you shortly.</p>
          
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                required
              />
            </div>
            <div className="form-group">
              
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                required
              />
            </div>
            <div className="form-group">
              
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                className="message-textarea"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your project or inquiry"
                rows="6"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Send Message
              <i className="fas fa-paper-plane"></i>
            </button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default ContactUs; 