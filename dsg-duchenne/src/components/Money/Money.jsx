import React, { Component } from 'react';
import images from '../../importImages';
import './Money.css'

class ExplainMoney extends Component {
    render(){
      return (
          <React.Fragment>
    <div id="explainMoney" className="row offset-md-1 col-md-10">
    <div id="txt-trans">
    <h4 id="amount" className="col-md-8" >Monto recaudado gracias a Donaciones</h4>
    <h2 id="money" >$ 1.000.000 .-</h2>
    <h6 id="years" >Desde 2019 hasta 2020</h6>
    </div>
    <img className="img-fluid arrow col-md-1" src={images["share(1).svg"]} alt=""/>
    <img className="img-fluid icons col-md-2" id="savings" src={images["save-money-svg-svg.png"]} alt=""/>
    <img className="img-fluid arrow col-md-1" src={images["share(1).svg"]} alt=""/>
    <img className="img-fluid icons col-md-2" id="microscope" src={images["microscope-svg-svg.png"]} alt=""/>
    </div>
 
</React.Fragment>
      )
    }
}
export default ExplainMoney;