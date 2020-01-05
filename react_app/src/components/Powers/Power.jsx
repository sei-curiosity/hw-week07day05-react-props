import React, { Component } from 'react';

class Power extends Component {
    render() { 
        let id = this.props.id
        let sp = this.props.powers[id].superpowers
        return (
            <div>
                <h2><u>Superpowers:</u></h2>
                <ul>
                    {sp.map(spower =>{
                        return(
                        <li>{spower}</li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}
 
export default Power;