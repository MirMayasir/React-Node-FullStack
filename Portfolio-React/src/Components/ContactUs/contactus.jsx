import React, { useState } from 'react';
import '/src/Components/ContactUs/contactus.css';
import Navbar from "/src/Components/Navbar/navbar.jsx";
import Footer from '/src/Components/Footer/footer.jsx';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    number: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic client-side validation
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.number || !formData.message) {
      setStatus('Please fill out all fields.');
      return;
    }

    fetch('http://localhost:5000/contacts', { // Update the URL to match your backend URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Received form data:', data);
      setStatus('Form submitted successfully!');
      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        number: '',
        message: ''
      });
    })
    .catch(error => {
      console.error('Error sending form data:', error);
      setStatus('Error submitting the form. Please try again.');
    });
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="contact-title">Contact</h1>
        <div id="contact">
          <div className="contact-info">
            <p>Looking forward to hearing from you</p>
            <div>
              <h3>Phone</h3>
              <p>8493037519</p>
            </div>

            <div>
              <h3>Email</h3>
              <p>mayasirmir02@gmail.com</p>
            </div>
          </div>

          <div className="contact-me">
            <form id="contact-form" onSubmit={handleSubmit}>
              <div className="contact-name">
                <div className="f-name">
                  <label htmlFor="firstName">First Name</label>
                  <input type="text" name="firstName" id="firstName" value={formData.firstName} onChange={handleChange} />
                </div>

                <div className="l-name">
                  <label htmlFor="lastName">Last Name</label>
                  <input type="text" name="lastName" id="lastName" value={formData.lastName} onChange={handleChange} />
                </div>
              </div>

              <div className="contact-name">
                <div className="email">
                  <label htmlFor="email">Email</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
                </div>

                <div className="number">
                  <label htmlFor="number">Number</label>
                  <input type="number" name="number" id="number" value={formData.number} onChange={handleChange} />
                </div>
              </div>

              <div className="message-section">
                <div className="message">
                  <label htmlFor="message">Message</label>
                  <textarea name="message" id="message" value={formData.message} onChange={handleChange} />
                </div>

                <div className="button">
                  <button type="submit">Submit</button>
                </div>
              </div>

              {status && <p className="status-message">{status}</p>}
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
