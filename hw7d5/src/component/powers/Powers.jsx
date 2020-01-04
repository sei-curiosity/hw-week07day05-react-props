import React from 'react'

class Power extends React.Component {
    render(){

        return(
            <React.Fragment>
            <h2><u>Superpowers:</u></h2>
            <ul>
                {this.props.power}
            </ul>
            </React.Fragment>
        )
    }
}

export default Power;