import React, {Component} from 'react'

class Heros extends Component{


   render() {

      return (
          <div>
            
         <h1><u>Hero:</u>{this.props.heroName}</h1><br/>
          <h2><u>Alias:</u> {this.props.alias}</h2>
        
                  <p>{this.props.sup}</p>
          <hr/>
          </div>
    )
}

}

export default Heros;