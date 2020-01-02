import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heroes from "./components/Heroes/Heroes"
import Powers from './components/Powers/Powers'
import heroes from './components/Data/heroes'
import powers from './components/Data/powers'

function App() {
  return (
    <div className="App">
      
      { 
      heroes.map((heroe,index)=>
      <Heroes heroN={heroe.heroName} HumanN={heroe.humanName} key={index}>
      </Heroes>)
      }
       <img src={logo} className="App-logo" alt="logo" />
      {
        powers.map((power,index) => {
          return (
            <Powers name={power.heroName} key ={index}>
            {power.superpowers.map((superpower, index) =>
             
             
             <ul key ={index}>
             <li> {superpower} </li>
             </ul>
            
           )}
            </Powers>
        
          )
        })
     
      }
    </div>
  );
}

export default App;
