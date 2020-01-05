import React from'react'
import {Component} from 'react'

class Power extends Component{
    render(){
        console.log(this.props.currentHero)
        return (<div>
    <h2><u>Superpowers:</u></h2>
<ul>
    {this.props.currentHero.map(element =>{return({element.superpowers.map(ability =>{return(<li>{ability}</li>)})}) })}

</ul>
</div>
        )
    }
}

export default Power