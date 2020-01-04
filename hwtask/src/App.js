import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes from'./Component/Heroes'
import heroinfo from'./Component/data/heroinfo'
import Powers from './Component/Powers'
import powerinfo from './Component/data/powerinfo.js'


function App() {
  return (
    <div className="App">
      {heroinfo.map((hero,index)=>{
        return(<Heroes key={index} heroName={hero.heroName} humanName={hero.humanName} />
        )})}
      {powerinfo.map((power)=>{return( <Powers key={power.index} superpowers={power.superpowers}  />)
      })}
    </div>
    
  );
}

export default App;
