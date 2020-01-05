import React from 'react';
import './components/Hero.jsx'
import './App.css';

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


  return (
    <div className="App">
    {heroinfo.map((i,index) => {
    return(
      <Hero
      key={index}
      heroName={i.heroName}
      humanName={i.humanName}

      />

    )

   })}

    </div>
  );
}

export default App;
