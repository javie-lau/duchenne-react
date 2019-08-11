import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import ButtonDonate from '../../components/buttonDonate/ButtonDonate';
import images from '../../importImages';
import {Link } from 'react-router-dom';
import './Sumate.css';
 
class Sumate extends Component {
    render(){  
        return(
            <React.Fragment>
                <Navbar/>
                    <div id="sumate">
                        <div className="row">
                            <div className="col-md-8 offset-md-2 offset-1 col-10">
                                <h4>Tu colaboración es <span>fundamental</span> para seguir luchando contra  <br/>la Distrofia Muscular de Duchenne.</h4>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-md-8 offset-md-2 offset-1 col-10">
                                <p>Gracias a tu ayuda podemos financiar y promover proyectos de investigación para estar cada día mas cerca de la cura de esta terrible enfermedad. Gracias por unirte a nuestra fundación y ser parte de la solución.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 col-md-4 offset-md-2">
                                <img className="img-fluid center" src={images['superman-svg.png']} alt=""/>
                            </div>
                            <div className="col-6 col-md-4">
                                <img className="img-fluid center" src={images['enterprise-svg-svg.png']} alt=""/>
                            </div>
                        </div> 
                        <div className="row">
                            <div className="col-6 col-md-4 offset-md-2">
                                <h4>
                                    Persona natural
                                </h4> 
                            </div>
                            <div className="col-6 col-md-4">
                                <h4>
                                    Empresa solidaria
                                </h4>
                            </div>       
                        </div>     
                        <div className="row"> 
                            <div className="col-5 col-md-4 offset-md-2 offset-1">
                               <center><Link className="link" to="/contact"><ButtonDonate/></Link></center> 
                            </div>
                            <div className="col-5 col-md-4 offset-md-0 offset-1">
                            <center><Link className="link" to="/contact"><ButtonDonate/></Link></center>
                            </div>
                        </div>  

                    </div>
                
                <Footer />
            </React.Fragment>
        )
    }
}
export default Sumate;