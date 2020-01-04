import React , {Component} from 'react';
import powerInfo from '../Powers/data.js';
import Power from '../Powers/Powers.js';
import { If } from 'jsx-if-else';
class Heroes extends Component {
    state = {  }
    render(props) { 
        return (

<div>

<h1><u>Hero:</u>{this.props.heroName}</h1>
<h2><u>Alias:</u>{this.props.humanName} </h2>
        {powerInfo.map(element => <If condition={element.heroName == this.props.heroName}><Power superpowers={element.superpowers}> </Power></If> )}



</div>



          );
    }
}
 
export default Heroes;