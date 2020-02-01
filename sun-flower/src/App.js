import React from 'react';
import SunFlowerCard from './SunFlowerCard';
import './App.css';
import SunFlowerList from './SunFlowerList';
import {sunFlowers} from './sunFlowers';




function App() {
  return (
    <div className="App">
      <SunFlowerList sunFlowers={sunFlowers}/>
    </div>
  );
}

export default App;
