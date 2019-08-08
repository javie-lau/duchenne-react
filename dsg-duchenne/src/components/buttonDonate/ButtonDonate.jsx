import React, { Component } from 'react';
import '../buttonDonate/buttonDonate.css';
import images from '../../importImages';

class ButtonDonate extends Component{
    render(){
        return(
            
                <button className="btn donate"><img className="img-fluid"src={images['like2.svg']} alt=""/><span> Súmate</span></button>
           

        )
    }
}
export default ButtonDonate