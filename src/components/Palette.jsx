import React from 'react';
import Color from '../components/Color';
import './Palette.css';

function Palette({ palette }) {
  return (
    <div className="palette">
        <div class="palette-header">{palette.name}</div>
        <div className="colors">
        {palette.colors.map((color, index) => (
            <Color key={index} color={color} />
        ))}
        </div>
    </div>
  );
}

export default Palette;
