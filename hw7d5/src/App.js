import React from 'react';
import './App.css';
import heroesInfo from './data/heroesInfo'
import powersInfo from './data/powersInfo'
import Hero from './component/heroes/Heroes'
import Power from './component/powers/Powers'

function App() {
  function superPowers(heroName,powers){
    if(heroName === powers.heroName)
    {
    return (        
      powers.superpowers.map(power => (<li>{power}</li> ))
      )
  }}
  
  return (
    <div>
      {heroesInfo.map(hero => { return (
      <Hero heroName={hero.heroName} humanName={hero.humanName}> 
          <Power power={powersInfo.map(powers => superPowers(hero.heroName,powers))}/>
      </Hero>
      )})} 
    </div>
  );
}
export default App;
