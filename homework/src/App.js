import React from 'react';
import logo from './logo.svg';
import './App.css';
import Data from './components/Data/arrays'
import Heroes from './components/Heroes/Heroes'
import Powers from './components/Powers/Powers'

function App() {

  return (
    <div className="App">

      {Data.heroInfo.map(hero => {
        return(
          <Heroes name={hero.heroName} hname={hero.humanName} />
        )
      })}
      {Data.powerInfo.map(Element=> {
        return(
          <Powers superName={Element.heroName}>
            {Element.superpowers.map(sup => {
                return (
                <li>{sup}</li>
                )
            })}
          </Powers>
        )
      })}
      
    </div>
  );
}

export default App;
