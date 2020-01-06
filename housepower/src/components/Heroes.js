import React, {Component} from 'react' // ask what's this

class Heroes extends Component{
    render(){
    return( 
    <div className="Heroes">
    <h1><u>Hero: {this.props.hrName} </u></h1>
    <h2>Alias: {this.props.hmName} </h2>
    <div>
    {this.props.children}
    </div>
    <hr/>
    </div>
    )}}

export default Heroes 