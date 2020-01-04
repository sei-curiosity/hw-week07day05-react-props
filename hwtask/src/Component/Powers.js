import React, { Component,Children } from 'react';

class Powers extends Component {
    // state = {  }
    render(props) { 
        return (  

            <div className="Pwr">

<h2><u>Superpowers:</u></h2>
<ul>
<li> {this.props.superpowers}</li>
</ul>
</div>
        );
    }
}
 
export default Powers;