import React, {Component} from 'react' // ask what's this

class Heroes extends Component{
    render(){
        return( // I have to have a wrapping div. Each component sent from App.js is going to act as an instance of class Heroes, the instance will be represented by (this)
            <div className="Heroes">
                <h1><u>Hero: {this.props.hrName} </u></h1>
                <h2>Alias: {this.props.hmName} </h2>
                    <div>
                        {this.props.children}
                    </div>
                <hr/>
            </div>
        )//end return
    }// end render method
}// end class

export default Heroes