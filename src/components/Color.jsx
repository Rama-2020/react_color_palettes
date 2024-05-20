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

  return (
    <div 
    className="color" 
    style={{ backgroundColor: color }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
        { isHovered ? <p>{color}</p> : null}
    </div>
  );
}

export default Color;
