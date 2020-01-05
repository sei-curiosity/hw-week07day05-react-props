import React, {Component} from 'react';

class Power extends Component{

    render(){
        return(
            <div>
                
                <h2><u>Superpowers: </u>{this.props.heroName}</h2>
                <ul>
                   {this.props.superPower}
                </ul>
                
            </div>
        );
    }
}

export default Power;