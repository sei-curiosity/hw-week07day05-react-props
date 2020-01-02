import React, { Component } from 'react'

class Heroes extends Component {
render(){

    return(
        <div>
            <h1><u>Hero:</u>{this.props.name}</h1>
            <h2><u>Alias:</u>{this.props.hname}</h2>
            <hr/>
        </div>
    )
}
}

export default Heroes;