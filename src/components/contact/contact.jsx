import React, { useState } from 'react';
import './contact.css';
import GitHub from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';

const Contact = () => {
  // State to manage form data and validation
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [validationErrors, setValidationErrors] = useState({});

  // Event handler for input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Update form data
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));

    // Clear validation errors when the user starts typing
    setValidationErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  // Event handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the form fields
    const errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!isValidEmail(formData.email)) {
      errors.email = 'Invalid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    }

    // If there are errors, update the state to show the notifications
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
    } else {
      // Handle form submission logic here (e.g., send the form data to a server)
      console.log('Form submitted:', formData);
    }
  };

  // Helper function to validate email format
  const isValidEmail = (email) => {
    // You can use a more sophisticated email validation regex if needed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">Please fill out the form below to reach out.</span>
      <form className="contactForm" onSubmit={handleSubmit}>
        <input
          type="text"
          className="name"
          placeholder="Your Name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
        {validationErrors.name && <span className="error">{validationErrors.name}</span>}

        <input
          type="email"
          className="email"
          placeholder="Your Email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          onBlur={() => {
            // Validate email on blur
            if (formData.email.trim() && !isValidEmail(formData.email)) {
              setValidationErrors((prevErrors) => ({
                ...prevErrors,
                email: 'Invalid email address',
              }));
            }
          }}
        />
        {validationErrors.email && <span className="error">{validationErrors.email}</span>}

        <textarea
          className="msg"
          name="message"
          rows="5"
          placeholder="Say something here"
          value={formData.message}
          onChange={handleInputChange}
        />
        {validationErrors.message && <span className="error">{validationErrors.message}</span>}

        <button type="submit" value="Send" className="submitBtn">
          Submit
        </button>

        <div className="links">
          <a href="https://github.com/pauljsully" target="_blank" rel="noopener noreferrer">
            <img src={GitHub} alt="Github" className="link" />
          </a>
          <a href="https://www.instagram.com/p.sully8/" target="_blank" rel="noopener noreferrer">
            <img src={Instagram} alt="Instagram" className="link" />
          </a>
        </div>
      </form>
    </div>
  );
};

export default Contact;

