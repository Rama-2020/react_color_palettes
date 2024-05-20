import React from 'react';
import Palette from './components/Palette';
import './App.css';

import palettes from './data/colorPalettes';


function App() {
  return (
    <div className="App">
      <h1>Color Palettes</h1>
      <div className="palette-container">
        {palettes.map(palette => (
          <Palette key={palette.id} palette={palette} />
        ))}
      </div>
    </div>
  );
}

export default App;
