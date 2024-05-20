import React from 'react';
import './Color.css';

function Color({ color }) {
  return (
    <div className="color" style={{ backgroundColor: color }}>
    </div>
  );
}

export default Color;
