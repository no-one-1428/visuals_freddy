import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Fotter from "../../components/fotter/Fotter";
import Card from "../../components/card/Card";

const Services = () => {
  return (
    <div className="About_page">
      <Navbar />
      <div className="nd_half">
        <div className="abot_main_logo">
          <h1 className="contact_us_jed">Services</h1>
        </div>
      </div>
      <Card/>
      <Fotter />
    </div>
  );
};

export default Services;
