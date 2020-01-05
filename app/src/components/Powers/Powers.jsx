import React, { Component } from 'react';

class Powers extends Component {
    //state = {  }
    render() { 

        return ( 
            <div>
            <h2><u>Superpowers:</u></h2>
            <ul>
                {this.props.children}
            </ul> 
            </div>
         );
    }
}
 
export default Powers;