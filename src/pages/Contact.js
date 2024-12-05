import React, { useState } from 'react';
import '../styles/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { firstName, lastName, email, subject, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && subject && message) {
      console.log('Form submitted:', formData);
      setIsSubmitted(true);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <div className="header-underline"></div>
        <p className="contact-subtitle">We'd love to hear from you! Send us a message and we'll respond as soon as possible.</p>
      </div>

      <div className="contact-form-container">
        {isSubmitted ? (
          <div className="success-message">
            <div className="success-icon">✓</div>
            <h2>Thank You!</h2>
            <p>Your message has been successfully sent. We'll get back to you soon!</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        )}
      </div>

      <div className="contact-info">
        <div className="info-card">
          <div className="info-icon">📧</div>
          <h3>Email Us</h3>
          <p>support@booktoread.com</p>
        </div>
        <div className="info-card">
          <div className="info-icon">📞</div>
          <h3>Call Us</h3>
          <p>+1 (555) 123-4567</p>
        </div>
        <div className="info-card">
          <div className="info-icon">📍</div>
          <h3>Visit Us</h3>
          <p>123 Book Street, Reading City, RC 12345</p>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
