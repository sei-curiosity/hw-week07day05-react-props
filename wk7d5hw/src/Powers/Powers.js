import React from 'react'
import powerinfo from './data/powerinfo'
class Powers extends React.Component
{
    state = {}
    render(){
        return(
            <div className="powers">
                
      
            <h2><u>Superpowers:</u></h2>
            <ul>
           { this.props.superpowers.map((superpower) => {
              return <li>{superpower}</li>})}
            </ul>
            </div>
        )
    }
}
export default Powers