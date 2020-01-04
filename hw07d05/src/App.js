import React from 'react';
//import logo from './logo.svg';
import './App.css';
// import heroInfo from './components/data/heroInfo'
import Heroes from './components/Heroes'
import heroinfo from './components/data/heroInfo';
import Powers from './components/Powers'
import powerInfo from './components/data/powerInfo'


function App() {
  return (
    <div className="App">
      {
        heroinfo.map( (hero) => {
          // I am passing the properties of each object in the array to the component Heroes
          return <Heroes hrName={hero.heroName} hmName={hero.humanName}>
                  {
                    powerInfo.map( (power) => {
                      if (hero.heroName === power.heroName){
                        return <Powers sp={power.superpowers} />
                      } // end if      
                    } )
                  } 
                  </Heroes>
        } )
      // end of jsx
      }
    </div>
  );
}

export default App;
