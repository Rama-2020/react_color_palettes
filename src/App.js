import React from 'react';
import Palette from './components/Palette';
import './App.css';

// Dummy data
const palettes = [
  {
    id: 1,
    name: 'Warm Colors',
    colors: ['#FF5733', '#FFBD33', '#DBFF33', '#75FF33', '#33FF57']
  },
  {
    id: 2,
    name: 'Cool Colors',
    colors: ['#33FFBD', '#33DBFF', '#3375FF', '#5733FF', '#BD33FF']
  },
  {
    id: 3,
    name: 'Neutral Colors',
    colors: ['#FFFFFF', '#CCCCCC', '#999999', '#666666', '#333333']
  }
];

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
