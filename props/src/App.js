import React from 'react';
import Heroes from './components/Heroes';


let heroinfo = [
  {
    heroName: 'Superman',
    humanName: 'Clark'
  },
  {
    heroName: 'Flash',
    humanName: 'Barry'
  },
  {
    heroName: 'Wonder Woman',
    humanName: 'Diana'
  }
]

let powerInfo = [
  {
    heroName: 'Superman',
    superpowers: ['flight', 'laser eyes', 'ice breath']
  },
  {
    heroName: 'Flash',
    superpowers: ['speed', 'lightening']
  },
  {
    heroName: 'Wonder Woman',
    superpowers: ['strength', 'lasso of truth']
  }
]

function App() {
  return (
    <div className="App">
      <Heroes heroes={heroinfo} powers={powerInfo} />
    </div>
  );
}

export default App;
