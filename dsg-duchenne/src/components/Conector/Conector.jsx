import React, { Component } from 'react';
import images from '../../importImages';
import './Conector.css'


class Conector extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div>
             <a className="conector"><img className="img-fluid conector" src={images["New-Project(13).png"]} alt=""/>
             <h5 className="txt-btn">{this.props.title}</h5>
             </a>
            </div>
        )
    }
}
export default Conector