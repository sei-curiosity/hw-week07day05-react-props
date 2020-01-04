import React from 'react';
// import logo from './logo.svg';
import './App.css';
import powerInfo from './components/data/powerInfo'
import heroInfo from './components/data/heroInfo'
import Power from './components/Powers'
import Heroes from './components/Heroes'

function App() {
  return (
    <div className="App">
       { 
      heroInfo.map((hero)=>
      <Heroes heroName={hero.heroName} humanName={hero.humanName}>
      </Heroes>)
      }
       <br/>
       <br/>
      {
        powerInfo.map((power) => {
          return (
            <Power name={power.heroName}>
            {power.superpowers.map((superpower) =>

             <ul>
             <li> {superpower} </li>
             </ul>

           )}
            </Power>

          )
        })

      }
    </div>
  );
}

export default App;
