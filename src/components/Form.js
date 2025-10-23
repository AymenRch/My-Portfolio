import { FaTelegram } from "react-icons/fa6";
import "./FormStyles.css";
import emailjs from '@emailjs/browser';
import React, { useState } from 'react';

const Form = () => {
  // Define state hooks for form data
  const [namee, setName] = useState('');     // Name state
  const [emaile, setEmail] = useState('');    // Email state
  const [messagee, setMessage] = useState(''); // Message state
  const [status, setStatus] = useState('');   // Status message

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_4938npr";
    const templateId = "template_ofrwzc8";
    const publicKey = "6fGDPMzvOOsPTNwdb";

    const templateParams = {
      from_name: namee, // The name entered in the form
      from_email: emaile, // The email entered in the form
      to_name: "Aymen", // Recipient name (you can replace with your name)
      message: messagee, // The message entered in the form
    };

    // Send email using emailjs
    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setStatus('Your message was sent successfully!');
        setName('');   // Clear form after successful submission
        setEmail('');  // Clear form after successful submission
        setMessage(''); // Clear form after successful submission
      })
      .catch((error) => {
        console.error('Error sending the email:', error);
        setStatus('Failed to send the message. Please try again later.');
      });
  };

  return (
    <div className="form">
      <h2>
        <span className="contact">Contact</span>
        <span className="me">Me!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <input
            type="text"
            placeholder="Full Name"
            value={namee}
            onChange={(e) => setName(e.target.value)} // Update state when name changes
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={emaile}
            onChange={(e) => setEmail(e.target.value)} // Update state when email changes
            required
          />
        </div>
        <textarea
          rows={6}
          placeholder="Your Message"
          value={messagee}
          onChange={(e) => setMessage(e.target.value)} // Update state when message changes
          required
        ></textarea>
        <button type="submit" className="btn1">
          <FaTelegram /> Send
        </button>
      </form>
      {status && <p>{status}</p>} {/* Display success/failure message */}
    </div>
  );
};

export default Form;
