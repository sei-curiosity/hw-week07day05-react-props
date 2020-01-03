import React from 'react';
import logo from './logo.svg';
import './App.css';
import heroInfo from '../src/components/Data/heroInfo'
import Power from './components/Powers';
import Heroes from './components/Heroes'
import powerInfo from './components/Data/powerInfo'


function App() {
  return (
    <div className="App">

      { 
      heroInfo.map((heroe)=>
      <Heroes heroName={heroe.heroName} humanName={heroe.humanName}>
      </Heroes>)
      }
       <hr/>
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