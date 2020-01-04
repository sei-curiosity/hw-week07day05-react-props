import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Hero from './Heroes/Heroes.js';

import heroInfo from './Heroes/data.js';


function App() {
  return (
    <div className="App">
      {heroInfo.map(element => <Hero heroName={element.heroName} humanName={element.humanName} > </Hero>)}
     

    </div>
  );
}

export default App;
