import React from 'react';
import './App.css';
import heroinfo from './Heroes/data/heroinfo'
import Heroes from './Heroes/Hereos'

function App() {
  return (
    <div className="App">
      { heroinfo.map((hero,index) =>{
       
        return <Heroes key ={index} heroName = {hero.heroName} humanName = {hero.humanName}>
           
         </Heroes>
      })}
     
    </div>
  );
}
export default App;
