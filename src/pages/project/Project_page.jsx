import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Fotter from "../../components/fotter/Fotter.jsx";
import Project_d from '../../components/project_display/Project_d.jsx'
import './project_page.css'

const Project_page = () => {
  return (
    <div className="About_page">
      <Navbar />
      <div className="nd_half">
        <div className="abot_main_logo">
           Projects
        </div>
        <Project_d/>
        <Fotter/>
      </div>
    </div>
  );
};

export default Project_page;
