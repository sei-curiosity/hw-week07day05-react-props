import React from 'react'

class Hero extends React.Component{

    render(){

        return(
            <React.Fragment>
                <h1><u>Hero:</u> {this.props.heroName} </h1>
                <h2><u>Alias:</u> {this.props.humanName} </h2>
                {this.props.children}
            </React.Fragment>
        )
    }
}

export default Hero;