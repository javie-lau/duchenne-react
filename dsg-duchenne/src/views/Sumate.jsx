import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import images from '../importImages';
import {Link } from 'react-router-dom';
import './Sumate.css';

class Sumate extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <div className="container-donate" id="sumate">
                    <div className="row">
                        {/* <h4>Tu colaboración es fundamental para seguir luchando contra la distrofia Muscular de Duchenne</h4>
                        <p>Con tu ayuda podemos financiar y promover proyectos de investigación para estar cada día más cerca de la cura de esta enfermedad.¡Gracias por unirte a nuestra fundación y ser parte de la solución!</p>
                    </div>

                    <div className="row">
                        <div className="col-6 col-md-4 offset-md-2 ">
                            <img className="img-fluid icon-donate" src={images["enterprise-svg-svg.png"]} alt=""/>
                            <h5>Empresa Solidaria</h5>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                            <Link className="link" to="/contact"><button className="btn btn-help">Ayudar</button></Link>
                    </div>

                    <div className="col-6 col-md-4 offset-md-2">
                        <img className="img-fluid icon-donate" src={images["superman-svg.png"]} alt=""/>
                            <h5>Persona Natural</h5>
                            <ul>
                                <li>Lorem, ipsum dolor.</li>
                                <li>Lorem, ipsum dolor sit.</li>
                                <li>Lorem, ipsum dolor.</li>
                            </ul>
                            <Link className="link" to="/contact"><button className="btn btn-help">Ayudar</button></Link>
                    </div>

                    </div>
                 </div> */}
        


                      
                        <div className="col-6 col-md-4 offset-md-2 img"><img className="img-fluid" src={images['enterprise-svg-svg.png']} alt=""/></div>
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
                            <Link className="link" to="/contact"><button className="btn btn-help">Ayudar!</button></Link>
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
                            <Link className="link" to="/contact"><button className="btn btn-help">Ayudar!</button></Link>
                        </div>
                        <div className="col-6 col-md-4 offset-md-1 img"><img className="img-fluid" src={images['superman-svg.png']} alt=""/></div> 
                    </div>
                    </div>
             

                <Footer />
            </React.Fragment>
        )
    }
}
export default Sumate;