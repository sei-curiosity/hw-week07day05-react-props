import React from 'react'


class Powers extends React.Component{

    render (){
        return (
         <div className="Powers">
         <h2><u>Superpowers:</u>{this.props.name}</h2>
          
          {this.props.children}
          
          </div>
        );
    }

}

export default Powers;
