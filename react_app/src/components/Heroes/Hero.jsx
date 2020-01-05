import React, {Component} from 'react';
import Power from "../Powers/Power";
import powerInfo from "../../data/power";


class Hero extends Component {
    render() { 
        return (
            this.props.data.map((hero,idx) => {
                return(
                    <div>
                        <h1><u>Hero:</u> {hero.heroName}</h1>
                        <h2><u>Alias:</u>{hero.humanName} </h2>
                        <Power powers={powerInfo} id={idx} />
                    </div>
                )
            })
        );
    }
}
 
export default Hero;
