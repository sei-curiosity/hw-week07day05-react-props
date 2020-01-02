import React, { Component } from 'react';

class Powers extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.powers.map(superpower => <li key={superpower}>{superpower}</li>)}
                </ul>
            </div>
        );
    }
}

export default Powers;
