import React, { useState } from 'react';
import './img.css';

const Imgslider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    { id: 1, title: 'Skull', className: 'img_1' },
    { id: 2, title: 'Sword', className: 'img_2' },
    { id: 3, title: 'Donut', className: 'img_3' }
    
  ];

  const handlePanelClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <div className='main_cont'>
      <div className='container'>
        {panels.map((panel, index) => (
          <div
            key={panel.id}
            className={`panel ${panel.className} ${activeIndex === index ? 'active' : ''}`}
            onClick={() => handlePanelClick(index)}
          >
            <button className='banner_view_more'> View More</button>
          </div>
        ))}
      </div>
    </div>
    <div className='line'>

    </div>
    </div>
  );
}

export default Imgslider;
