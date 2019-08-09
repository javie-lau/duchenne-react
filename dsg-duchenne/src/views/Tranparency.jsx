import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import images from '../importImages';
import './Transparency.css';
import Conector from '../components/Conector/Conector';

class Transparency extends Component{
    render(){
        return(
         <div>
             <React.Fragment>
                <Navbar/>
                <div id="transparency" className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Transparencia y cuentas claras</h2>
                    </div>
                    <div className="col-12">
                        <p>Para mantener la confianza de nuestros socios y donantes, es importane conocer el destino de los fondos recaudados.</p>
                    </div>
                        <div className="col-12">
                            <img className="img-fluid icons" id="savings" src={images["save-money-svg-svg.png"]} alt=""/>
                            <img className="img-fluid arrow" src={images["icons8-flecha-izquierda-larga-64(2).png"]} alt=""/>
                            <img className="img-fluid icons" id="microscope" src={images["microscope-svg-svg.png"]} alt=""/>
                            <img className="img-fluid arrow" src={images["icons8-flecha-izquierda-larga-64(2).png"]} alt=""/>
                            <img className="img-fluid icons" id="family" src={images["family(2)-svg.png"]} alt=""/>
                        </div>
                    </div>   
                    <div className="container-trans-bottom"> 
                        <div className="col-md-4 offset-md-4 offset-1 col-10">
                            <Conector title="Cuentas 2018"/>
                            <Conector title="Cuentas 2019"/>
                        </div >
                        {/* <div className="offset-1 col-md-4">
                            <img className="img-fluid" src={images["pdf-trans.png"]} alt=""/>
                        </div> */}
                    </div>
                </div>

                <Footer/>
             </React.Fragment>
         </div>
        )
    }
}
export default Transparency;