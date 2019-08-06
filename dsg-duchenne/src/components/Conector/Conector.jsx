import React, { Component } from 'react';
import images from '../../importImages';


class Conector extends Component{
    render(){
        return(
            <div>
            <h5>{this.props.state}</h5>
             <img className="img-fluid conector" src={images['New-Project(13).png']} alt=""/>
            </div>
        )
    }
}
export default Conector