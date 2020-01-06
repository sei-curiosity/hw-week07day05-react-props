import './App.css';

import React, { Component } from 'react';

import Heros from './components/Heros';
import Powers from './components/Powers';
import heroinfo from './components/Data/hero';
import logo from './logo.svg';
import powerInfo from './components/Data/power';

function App() {
  return (
    <div className="App">
        <div className="power">
          { powerInfo.map((power)=>{
            return( <Powers superpowers={power.superpowers}>
              </Powers>
            );
            })}
        </div>
        
          <div className="hero">
            {heroinfo.map((hero)=>{
              return( <Heros heroName={hero.heroName}></Heros> 
                 );
              })}        

          </div>

    </div>
  );
}

export default App;
