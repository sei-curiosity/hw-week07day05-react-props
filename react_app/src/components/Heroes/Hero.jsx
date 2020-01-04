import React from 'react';

function Hero(props){
    return(
        props.map(hero => hero.heroName)
    )
}

export default Hero;