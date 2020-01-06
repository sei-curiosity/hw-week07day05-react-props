import React from 'react';
import './App.css';
import Heroes from './components/Heroes';
import heroinfo from './components/data/heroInfo';
import Powers from './components/Powers';
import powerInfo from './components/data/powerInfo';


function App() {
  return (
  <div className="App">
      {
        heroinfo.map( (hero) => {
        return <Heroes hrName={hero.heroName} hmName={hero.humanName}>
                  {
        powerInfo.map( (power) => {
        if (hero.heroName === power.heroName){
        return <Powers sp={power.superpowers} />
        }      
        } )
        } 
        </Heroes>
        } )
      }
    </div>
  );
}

export default App;
