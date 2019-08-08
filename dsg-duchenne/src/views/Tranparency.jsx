import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import images from '../importImages';
import './Transparency.css';

class Transparency extends Component{
    render(){
        return(
         <div>
             <React.Fragment>
                <Navbar/>
                <div id="transparency"> 
                    <h2>Transparencia y cuentas claras</h2>
                    <p>Para mantener la confianza de nuestros socios y donantes, es importane conocer el destino de los fondos recaudados.</p>
                    <img className="img-fluid icons" id="savings" src={images["save-money-svg-svg.png"]} alt=""/>
                    <img className="img-fluid arrow" src={images["icons8-flecha-izquierda-larga-64(2).png"]} alt=""/>
                    <img className="img-fluid icons" id="microscope" src={images["microscope-svg-svg.png"]} alt=""/>
                    <img className="img-fluid arrow" src={images["icons8-flecha-izquierda-larga-64(2).png"]} alt=""/>
                    <img className="img-fluid icons" id="family" src={images["family(2)-svg.png"]} alt=""/>
                </div>
                <Footer/>
             </React.Fragment>
         </div>
        )
    }
}
export default Transparency;