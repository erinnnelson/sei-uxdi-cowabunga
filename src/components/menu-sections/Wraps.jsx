import React from 'react';

import image from '../../assets/menu-images/Wraps.png';

export default function Wraps() {
  return (
    <div className="menu-section-item">
      <div className="section-title">
        <h2>Wraps</h2>
      </div>
      <div className="section-image">
        <img src={image} alt="vegetarian stuff" />
      </div>
      <div className="section-content">
        <p>Tuna <span>$2.75</span></p>
        <p>Egg Salad <span>$3.75</span></p>
      </div>
    </div>
  )
}