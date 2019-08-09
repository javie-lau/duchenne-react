import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import ButtonDonate from '../components/buttonDonate/ButtonDonate';
import images from '../importImages';
import {Link } from 'react-router-dom';
import './Sumate.css';

class Sumate extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                  <div className="container" id="sumate">
                       <h4>Tu colaboración es fundamental para seguir luchando contra la distrofia Muscular de Duchenne</h4>
                        <p>Con tu ayuda podemos financiar y promover proyectos de investigación para estar cada día más cerca de la cura de esta enfermedad.¡Gracias por unirte a nuestra fundación y ser parte de la solución!</p>
              
                    <div className="row">
                        <div className="col-6 col-md-3 offset-md-4">
                            <img className="img-fluid" src={images['superman-svg.png']} alt=""/>
                        </div>
                        <div className="col-6 col-md-3">
                            <img className="img-fluid" src={images['enterprise-svg-svg.png']} alt=""/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-md-3 offset-md-4">
                            <h6>
                                Persona:
                            </h6> 
                            <Link className="link" to="/contact"><ButtonDonate/></Link>
                        </div>
                        <div className="col-6 col-md-3">
                            <h6>
                                Empresa solidaria:
                            </h6>
                            <Link className="link" to="/contact"><ButtonDonate/></Link>
                        </div> 
                    </div>
                </div>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Sumate;