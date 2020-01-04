import React, {Component} from 'react';

class Heroes extends Component{

    render (){
        return (
            <div className="Heroes">
              <h1> {this.props.heroName}</h1>
              <h2>{this.props.humanName} </h2>   


            </div>
        );
    }
}

export default Heroes;