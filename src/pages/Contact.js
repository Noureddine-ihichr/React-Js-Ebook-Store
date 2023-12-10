import React, { useState } from 'react';
import '../styles/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const { firstName, lastName, email, message } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form here before submitting

    // Example: Check if required fields are filled
    if (firstName && lastName && email && message) {
      // Perform the submission logic
      console.log('Form submitted:', formData);

      // Set isSubmitted to true after successful submission
      setIsSubmitted(true);
    } else {
      // Display an error message or take appropriate action for incomplete form
      console.log('Incomplete form. Please fill in all required fields.');
    }
  };

  return (
    <div className="contact-form-container">
      <h1>Contact Us</h1>
      {isSubmitted ? (
        <p className='success-message'>Thanks for Contacting Us!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={handleChange}
              placeholder="First Name"
              required
            />
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={handleChange}
              placeholder="Last Name"
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              value={message}
              onChange={handleChange}
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <div className="form-group">
            <button className='SubmitB' type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
