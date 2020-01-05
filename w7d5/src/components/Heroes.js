import React from'react'
import {Component} from 'react'
import Power from './Powers'
    
    class Hero extends Component {
   
    state = {  }
    render() { 
        let currentHero =''
        return ( 
            <div>
          
            <p>hero Name: {this.props.currentHero.heroName}</p>
            <p>human Name: {this.props.currentHero.humanName}</p>
           
        </div>)
    }
}
 
export default Hero