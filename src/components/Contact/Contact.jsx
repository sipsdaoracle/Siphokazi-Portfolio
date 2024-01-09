// ContactForm.jsx
import React from 'react';
import './contact.css';
import { motion } from 'framer-motion';

const ContactForm = ({ isVisible }) => {
  return (
    <motion.div className="form-container"  initial={{ opacity: 0}}
    animate={{ opacity: isVisible ? 0 : 1 }}
    transition={{ duration: 0.7 }}>
      <h2>Contact Me</h2>
      <form
        action="mailto:siphokazidolo@gmail.com"
        method="post"
        encType="text/plain"
        className="contact-form"
      >
        <label htmlFor="name">Your Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Your Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="message">Your Message:</label>
        <textarea id="message" name="message" rows="4" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </motion.div>
  );
};

export default ContactForm;
