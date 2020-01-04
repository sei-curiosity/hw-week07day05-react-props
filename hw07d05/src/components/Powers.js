import React, {Component} from 'react'

class Powers extends Component{
    render(){
        return(
            <div className="Powers">
                    <ul>
                        {this.props.sp.map(e => {
                           return <li>{e}</li>     
                        })}
                    </ul>  
            </div>
        ) // end return
    }// end render
}// end class


export default Powers