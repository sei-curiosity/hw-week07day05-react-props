import React from 'react';
import logo from './logo.svg';

import powerInfo from './powerInfo'
import heroinfo from './heroinfo'
import Hero  from './components/Heroes'
import Power from './components/Powers'
function App() {
  let currentHero =''
  return (

  <div >
    
    {heroinfo.map(hero =>{return(
      <div>
      <Hero currentHero={hero}/>
     
      <Power currentHero={powerInfo.filter(element =>{return(element.heroName ===hero.heroName)})} />
      </div>
    )})}
    
  );
}
</div >
  )}
export default App;
