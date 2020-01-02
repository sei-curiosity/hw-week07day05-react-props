import React, { Component } from 'react';

class Powers extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.powers.map(power => <li>{power}</li>)}
                </ul>
            </div>
        );
    }
}

export default Powers;
