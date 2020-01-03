import React from 'react';
import './App.css';
import heros from './component/data/heros';
import Heros from './component/Hero/Heros';
import powers from './component/data/powers';
import Power from   './component/Hero/Power';

function App(){
    return (
      <div className="App">
       
       {heros.map((hero,index)=>{
         return  < Heros key={index} heroName={hero.heroName} alias={hero.humanName}
         />})}
      
        {powers.map((power)=> <Power key={heros.key} sup={power.superpowers}/>)}
         <Power />
             
       </div>
  );
}

export default App;
