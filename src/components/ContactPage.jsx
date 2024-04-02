import React, { useState } from "react";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true);

    
  };

  return (
    <div className="contact-name">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <label htmlFor="name">Name:</label>
          <br></br>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Jeremy"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>

        <div className="contact-email">
          <label htmlFor="email">Email:</label>
          <br></br>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="johnsmith@gmail.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div className="contact-message">
          <label htmlFor="message">Message:</label>
          <br></br>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="I love this website!"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <br></br>
        <div className="contact-submit-button">
          <input type="submit" value="Submit" />
        </div>
        {submitted ? (
          <div className="submitted-message">
            Thank you for your message, we will get back to you promptly!
          </div>
        ) : (
          <div></div>
        )}
      </form>
    </div>
  );
};

export default ContactPage;
