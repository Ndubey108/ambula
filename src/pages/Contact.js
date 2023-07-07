import React, { useState } from 'react';
import App from '../App';
import '../App.css';
const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    //  implemented the logic to submit the form data
    // to a server or perform any other actions.
    // You can access the form data using the `name`, `email`, and `message` state values.
    // For simplicity, let's just display an alert message with the form data.
    alert(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // Reset the form
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className='contactForm'>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='input'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
