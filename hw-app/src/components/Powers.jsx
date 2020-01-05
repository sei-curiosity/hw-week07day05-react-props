import React, { Component } from 'react';

class Powers extends Component{
    render(){
        return ( <div>

<h2><u>Superpowers:</u></h2>
<ul>
<li>{this.props.superpowers}</li>
</ul>
        </div> 
         );
   }

}
export default Powers;