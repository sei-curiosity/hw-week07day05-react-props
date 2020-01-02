import React, { Component } from 'react';
import Powers from './Powers';

class Heros extends Component {
    render() {
        return (
            <div>
                <h1>Heros:</h1>

                {this.props.heroes.map(hero => {
                    return (
                        <div>
                            <h1><u>Hero:</u> {hero.heroName}</h1>
                            <h2><u>Alias:</u> {hero.humanName}</h2>
                            <h2><u>Superpowers:</u></h2>
                            {this.props.powers.map(p => {
                                if (p.heroName === hero.heroName) {
                                    return <Powers powers={p.superpowers} />
                                }
                            })}
                            <hr />
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default Heros;