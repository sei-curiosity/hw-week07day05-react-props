import React , {Component} from 'react' 
import Powers from '../Powers/Powers'
import powerinfo from '../Powers/data/powerinfo'

class Heroes extends Component {
    state = {  }
    render() { 
        return ( 
            <div className ="Heroes">
        <h1><u>Hero:{this.props.humanName}</u> </h1>
        <h2><u>Alias:{this.props.heroName}</u> </h2>
        { powerinfo.map((power) => {
             if (this.props.heroName === power.heroName) 
        return  <Powers superpowers = {power.superpowers} > </Powers>
    })     
    }
    <hr></hr>
        </div>
         );
    }
}
 
export default Heroes;