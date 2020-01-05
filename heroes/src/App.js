import React from 'react';
import './App.css';
import Heroes from "./components/Heroes";
import heroinfo from './components/data/heroes';
import Powers from './components/Powers';
import powerInfo from './components/data/powers';
function App() {
  return (
    <div className="App">
<div className='hero'>
      {heroinfo.map ((hero)=> {
         return(
          <Heroes heroName={hero.heroName} humanName={hero.humanName}></Heroes>
         );
      })}
    </div>
 <div className='power'>
       {powerInfo.map ((power)=>{
         return (
          <Powers superpowers={power.superpowers}></Powers>
         );
        })}
  </div>
    </div>
  );
}
export default App;