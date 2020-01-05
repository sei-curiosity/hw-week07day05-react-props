
import React from 'react'
import powerInfo from './powerInfo'

class Powers extends React.Component
{
    
    render(){
        return(
            <div className="powers">


            <h2><u>Superpowers:</u></h2>
            <ul>
           { this.props.map((i) => {
              return {i}})}
            </ul>
            </div>
        )
    }
}
export default Powers 

