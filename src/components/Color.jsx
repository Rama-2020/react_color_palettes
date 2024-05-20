import React from 'react';
import './Color.css';

function Color({ color }) {
  return (
    <div>
      <div className='color' style={{ backgroundColor: color }}></div>
    </div>
  );
}

export default Color;
