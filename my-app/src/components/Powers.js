import React from 'react'


class Powers extends React.Component{

    render (){
        return (
         <div className="Powers">
         <h2>{this.props.name}</h2>
         <h2><u>Superpowers:</u></h2>
         <ul>
          <li>{this.props.children}</li>
         </ul>

          </div>
        );
    }

}

export default Powers;