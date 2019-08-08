import React, { Component } from 'react';
import images from '../../importImages';
import './Conector.css'


class Conector extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div id="conector" class="card text-white">
            <div class="card-body">
              <a className="link" href=""><h5 class="card-title">{this.props.title}</h5></a>
            </div>
          </div>

            // <div className="container-conector">
            //  <a><img className="img-fluid conector" src={images["NewProject(7).png"]} alt=""/>
            //  <h5 className="txt-btn">{this.props.title}</h5>
            //  </a>
            // </div>
        )
    }
}
export default Conector