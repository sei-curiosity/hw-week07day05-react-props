import React, { Component } from 'react';


class Hero extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1><u>Hero: </u>{this.props.heroName}</h1>
                <h2><u>Alias:</u>{this.props.humanName}</h2>
                
                <hr/>
            </div>
         );
    }
}
 
export default Hero;