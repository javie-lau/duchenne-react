import React, { Component } from 'react';
import images from '../../importImages';


class Conector extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
            <h5 className="txt-btn">{this.props.title}</h5>
             <img className="img-fluid conector" src={images["New-Project(13).png"]} alt=""/>
            </div>
        )
    }
}
export default Conector