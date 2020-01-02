import React, {Component} from 'react'


class Powers extends Component {
    render(){
        return(
            <div>
                    <h1><u>{this.props.superName}</u></h1>
                   <ul>
                       <li>
                           {this.props.children}
                       </li>
                   </ul>
            </div>
        )
    }
}

export default Powers;