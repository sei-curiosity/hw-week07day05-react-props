import React, { Component } from 'react';

class Powers extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.powers.map(superpower => <li>{superpower}</li>)}
                </ul>
            </div>
        );
    }
}

export default Powers;
