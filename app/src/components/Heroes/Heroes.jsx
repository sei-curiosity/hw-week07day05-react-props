import React, { Component } from 'react';
import Powers from '../Powers/Powers';

class Heros extends Component {
    //state = {  }
    render() { 

        let heros = this.props.heroinfo.map((hero, index)=>{
            return(
            <div>
            <h1><u>Hero:</u> {hero.heroName}</h1>
            <h2><u>Alias:</u>{hero.humanName} </h2>
            <Powers>
                {this.props.powerInfo[index].superpowers.map((power)=>{
                    return(
                        <li>{power}</li>
                    )
                })}
            </Powers>
            </div>
            )
        })

        return ( 
            <div>
            {heros}
            </div>
            );
    }
}
 
export default Heros;