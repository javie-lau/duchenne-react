import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import images from '../importImages';
import './Sumate.css';

class Sumate extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container" id="sumate">
                    <div className="row">
                        <div className="col-6 col-md-4 offset-md-2 img"><img className="img-fluid" src={images['empresa-svg(3).png']} alt=""/></div>
                        <div className="col-6 col-md-4 offset-md-1">
                            <h6>
                                Empresa solidaria:
                            </h6>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>En que consiste el<a href="http://www.sii.cl/contribuyentes/actividades_especiales/donaciones.pdf"> "Beneficio Tributario"</a></li>
                            </ul>
                            <button className="btn btn-help">Ayudar!</button>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-4 offset-md-2">
                            <h6>
                                Persona:
                            </h6>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem ipsum dolor sit amet.</li>
                            </ul>
                            <button className="btn btn-help">Ayudar!</button>
                        </div>
                        <div className="col-6 col-md-4 offset-md-1 img"><img className="img-fluid" src={images['superhombre-svg.png']} alt=""/></div>
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Sumate;