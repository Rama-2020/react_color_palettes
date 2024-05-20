import React from 'react';
import { useState } from 'react';
import './Color.css';

function Color({ color }) {
    const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleColorClick = () => {
    navigator.clipboard.writeText(color);
  };


  return (
    <div 
    className="color" 
    style={{ backgroundColor: color }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    onClick={handleColorClick}
    >
        {/* { isHovered ? <p>{color}</p> : null} */}
        <p>{color}</p>
    </div>
  );
}

export default Color;
