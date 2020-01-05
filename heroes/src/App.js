import React from 'react';
import Hero from './components/Hero/Hero'
import heroes from './components/Hero/data/heroes'
import './App.css';

function App() {
  return (
    <div className="App">
            {heroes.map((hero)=> {
        return(
            <Hero heroName={hero.heroName} humanName={hero.humanName}>
            <div>
            </div>
            </Hero>
          )
      
      })}

    </div>
  );
}

export default App;
