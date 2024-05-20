import React from 'react';
import { useState } from 'react';

import Palette from './components/Palette';
import './App.css';

import palettes from './data/colorPalettes';


function App() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredPalettes = palettes.filter(palette =>
    palette.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    palette.colors.some(color => color.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="App">
      <h1>Color Palettes</h1>
      <input
        type="text"
        placeholder="Buscar paletas de colores..."
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className="palette-container">
        {filteredPalettes.map(palette => (
          <Palette key={palette.id} palette={palette} />
        ))}
      </div>
    </div>
  );
}

export default App;
