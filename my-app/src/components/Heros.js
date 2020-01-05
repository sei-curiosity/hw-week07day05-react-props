import React, { Component } from 'react';
class Heros extends Component {
   
    render() { 
        return ( 
            <div>
                
             <h1><u>Hero:</u>{this.props.heroName}</h1>
            <h2><u>Alias:</u>{this.props.humanName} </h2>
                
            </div>

        );
    
}
}

export default Heros;
