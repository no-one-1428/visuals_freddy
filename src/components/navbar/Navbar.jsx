import React, { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [is_sidebar_open, toogle_sidebar] = useState(false)
  const lets_toogle = () => {
    toogle_sidebar(!is_sidebar_open)
  }
  return (
    <nav>
      <div className="for_pc">
        <div className="for_pc_cont">
          <div className="for_pc_cont_1">Logo</div>
          <div className="for_pc_cont_2">
            <li><Link to={`/`} className="hover_to" >Home</Link></li>
            <li><Link to={`/`} className="hover_to" >Services</Link></li>
            <li><Link to={`/`} className="hover_to" >Upcoming Projects</Link></li>
            <li><Link to={`/about`} className="hover_to" >About Me</Link></li>
            <li className="contact_me">Contact Me</li>
          </div>
        </div>
      </div>

      <div className="for_mobile">
        <div className="for_mobile_cont">
          <div className="logo_on_mobile hello12e">Logo</div>
          <span className="material-symbols-outlined hello12e" onClick={lets_toogle}>menu</span>
        </div>
      </div>

      <div className={is_sidebar_open ? 'sidebar':'none'}>
      <span className="material-symbols-outlined close" onClick={lets_toogle}>close</span>
        <div className="cont_mob_list">
        <ul className="list_cont_mob">
        <li><Link to={`/`} className="hover_to" >Home</Link></li>
            <li><Link to={`/`} className="hover_to" >Services</Link></li>
            <li><Link to={`/`} className="hover_to" >Upcoming Projects</Link></li>
            <li><Link to={`/about`} className="hover_to" >About Me</Link></li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
