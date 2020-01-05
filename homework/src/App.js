import React from 'react';
import './App.css';

import data from './components/data/data';
import Hero from './components/heroes/hero';
import Power from './components/powers/power';

function App() {
  return (
    <div >


      {data.heroInfo.map((element,index)=> {
        return(
          <Hero key={index} heroName={element.heroName} humanName={element.humanName}
          />
        )}
      )}


      {data.powerInfo.map((element,index)=>{
          return(
            <Power key={index} heroName={element.heroName} superPower={element.superpowers.map((power,index)=>{
              return( 
                 <li key={index} > {power}</li>
                )
            })}/> 
          )
      })}   

    </div>
  );
}

export default App;
