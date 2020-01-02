import React from "react"

class Heroes extends React.Component{

    render (){
        return (
            <div className="Heroes">
              <h1><u>Hero:</u> {this.props.heroN}</h1>
              <h2><u>Alias:</u>{this.props.HumanN} </h2>   


            </div>
        );
    }
}

export default Heroes; 