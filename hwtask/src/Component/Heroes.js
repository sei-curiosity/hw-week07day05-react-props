import React, { Component } from 'react';

class Heroes extends Component {
  
    render(props) { 
        
        return ( 
<div className='Hero'>

<h1><u>Hero:</u> {this.props.heroName}</h1>
<h2><u>Alias:</u>{this.props.humanName} </h2>
</div>


         );
    }
}
 
export default Heroes;