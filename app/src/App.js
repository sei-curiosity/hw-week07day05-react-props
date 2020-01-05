import React from 'react';
import logo from './logo.svg';
import './App.css';
import Heros from './components/Heroes/Heroes';

function App() {
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


  return (
    <div className="App">
      <Heros heroinfo={heroinfo} powerInfo={powerInfo}/>
      
    </div>
  );
}

export default App;
