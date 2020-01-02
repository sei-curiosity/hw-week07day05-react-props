import React, { Component } from 'react';

class Powers extends Component {
    render() {
        return (
            <div>
                <h2><u>Superpowers:</u></h2>
                <ul>
                    {this.props.powers.map(power => <li>{power}</li>)}
                </ul>
            </div>
        );
    }
}

export default Powers;
