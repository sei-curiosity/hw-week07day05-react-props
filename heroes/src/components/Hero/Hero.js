import React, {Component} from 'react';

class Hero extends Component {
    render(){


        return(
            <div className="Hero">
                {this.props.children}
            <br></br>
                {this.props.heroName}
            </div>
        )
    }


}
export default Hero