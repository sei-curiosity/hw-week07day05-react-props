import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Powers from './components/Powers'
import Heroes from './components/Heroes'
import heroInfo from './components/data/heroInfo'
import powerInfo from './components/data/powerInfo'
import heroinfo from './components/data/heroInfo';

 
function App() {
  return (
    <div className="App">
{
  heroinfo.map((hero) =>{
return(

<Heroes heroName={hero.heroName} humanName={hero.humanName}></Heroes>
  
)
 })
}
<br></br>
{
powerInfo.map((power)=>{

return(

  <Powers  superpowers={power.superpowers}></Powers>

)


})

}


    </div>
  );
}
export default App;
