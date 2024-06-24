import React from "react";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about_me/About";
import './about.css'
import About_me_2 from '../../components/about_me_2/About_me_two.jsx'

const About_o = () => {
  return (
    <div className="About_page">
      <Navbar />
      <div className="nd_half">
        <div className="abot_main_logo">
          About Us
        </div>
        <About/>
        <About_me_2/>
      </div>
    </div>
  );
};

export default About_o;
