import React, { useState } from 'react';
import './img.css';

const Imgslider = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const panels = [
    { id: 1, title: 'Card_1', className: 'img_1' },
    { id: 2, title: 'Card_2', className: 'img_2' },
    { id: 3, title: 'Card_3', className: 'img_3' }
    
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
            <h1>{panel.title}</h1>
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
