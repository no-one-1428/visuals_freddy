import React from "react";
import "./main_for_this.css";
import Navbar from "../../navbar/Navbar";
import img1 from '../../image/img1.png'

const donut = ({tittle, para, img_path}) => {
  return (
    <>
    <Navbar/>
    <div className="after_nav_page">
      <div className="text_for_this_page">
        <h1 className="h1_this_page">{tittle}</h1>
        <br />
        <br />
        <br />
        <br />
        <p className="p_this_page">{para}</p>
      </div>

      <img className="this_page_image" src={img_path} alt="" />

    </div>
      
    </>
  );
};

export default donut;
