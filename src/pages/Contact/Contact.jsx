import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Fotter from "../../components/fotter/Fotter";
import ContactForm from "../../components/contactform/ContactForm"; // Import the ContactForm component
import './Contact.css'
const Contact = () => {
  return (
    <div className="About_page">
      <Navbar />
      <div className="nd_half">
        <div className="abot_main_logo">
          <h1 className="contact_us_jed">Contact Us</h1>
        </div>
        <ContactForm /> {/* Add the ContactForm component here */}
      </div>
      <Fotter />
    </div>
  );
};

export default Contact;
