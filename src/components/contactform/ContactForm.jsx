import React, { useState } from "react";
import "./contactform.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    subject: "",
    question: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contact Us</h2>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Phone Number:
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Company (Optional):
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
          />
        </label>
        <label>
          Subject:
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Question:
          <textarea
            name="question"
            value={formData.question}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
      <div className="contact-info">
        <p>My Company</p>
        <p>3575 Fake Buena Vista Avenue</p>
        <p>+1 (650) 555-0111</p>
        <p>info@yourcompany.example.com</p>
      </div>
    </div>
  );
};

export default ContactForm;
