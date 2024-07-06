import React from "react";
import "./Footer.css";
const Fotter = () => {
  return (
    <footer className="foot_cont">
      <div className="fotter_his">
        <div className="upper_info_f">
          <div>
            <h2> How can we help?</h2>
            <h1 className="bigtext_h1">Contact us anytime</h1>
          </div>
          <div>
            <h2>Call us</h2>
            <h1>
              <a className="bigtext_h1" href="">
                +91-phone_number
              </a>
            </h1>
          </div>
          <div>
            <h2>Send us a message</h2>
            <h1 className="bigtext_h1">hello@mycompany.com</h1>
          </div>
          <div>
            <h2>Follow Us</h2>
            <div className="icons_fot">
              <i class="fa fa-twitter"></i>
              <i class="fa fa-linkedin-square"></i>
              <i class="fa fa-instagram"></i>
            </div>
          </div>
        </div>
        <div className="line_about"></div>
        <br />
        <div className="header_nav_cont">
          <div className="header_nav">
            <div>Your Logo</div>
            <ul className="navbar_fotter">
              <li>Home</li>
              <li>About Us</li>
              <li>Product </li>
              <li>Term of service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
        <br />

        
      </div>
      <div className="last_box_fotter">COPYRIGHT </div>
    </footer>
  );
};

export default Fotter;
