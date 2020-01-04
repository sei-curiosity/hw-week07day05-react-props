import React , {Component} from 'react';


class Powers extends Component {
    state = {  }
    render(props) { 
        return (

<div>

<h2><u>Superpowers:</u></h2>
<ul>
        {this.props.superpowers.map(element => <li>{element}</li> )}
<li></li>

</ul>

</div>



          );
    }
}
 
export default Powers;