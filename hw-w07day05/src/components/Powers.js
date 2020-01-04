import React, { Component } from 'react';


class Powers extends Component {
    state = {  }
    render() { 
        return ( 
      <div className="Powers">

     <h2><u>Superpowers:</u></h2>
       <ul>
        <li>{this.props.superpowers}</li>
       <li>{this.props.superpowers}</li>
     <li>{this.props.superpowers}</li>
      </ul>


      </div>

         );
    }
}
 
export default Powers ;