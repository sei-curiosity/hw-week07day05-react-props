import React from 'react';
import logo from './logo.svg';
import './App.css';
// My imports
import Hero from "./components/Heroes/Hero";
import heroInfo from "./data/hero";


function App() {
  // console.log(heroInfo)
  return (
    <div className="App">
      <Hero data={heroInfo}></Hero>
    </div>
  );
}

export default App;
