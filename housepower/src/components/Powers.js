import React, {Component} from 'react'

class Powers extends Component{
    render(){
    return(
    <div className="Powers">
    <ul>
    {this.props.sp.map(e => {
    return <li>{e}</li>     
    })}
    </ul>  
    </div>
    )}}

export default Powers 