import React, { Component } from 'react';
import './Navbar.css';
import images from '../../importImages';
import { Link } from 'react-router-dom';
import ButtonDonate from '../buttonDonate/ButtonDonate';



class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
                <div id="navbar" className="fixed-top">
                    <nav id="navbar-one" className="navbar navbar-expand-lg navbar-light ">
                        <div className="row">
                            <div className="col-8 col-md-4">
                                <Link  to="/"><a className="navbar-brand"><img className="img-fluid" src={images['New-project(3).png']} alt=""/><span><img className="img-fluid txt-cura" src={images['cura.png']} alt=""/></span></a></Link>
                            </div>
                            <div className="col-4 col-md-2 offset-md-6">
                                {/* <Link  to="/sumate"><button className="btn"><img className="img-fluid"src={images['like2.svg']} alt=""/><span> Súmate</span></button></Link> */}
                                <Link className="link"  to="/sumate"><ButtonDonate/></Link>
                            </div>    
                        </div>
                    </nav>
                    <nav id="navbar-two" className="navbar navbar-expand-lg">
                        <div className="navbar-toggler"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <div className="hamburger"></div>
                        </div>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">                
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sobre Duchenne
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="link" to='/que-es-duchenne'> <a className="dropdown-item" href="#">¿Qué es Duchenne?</a> </Link>
                                    <div className="dropdown-divider"></div>
                                <Link className='link' to='/diagnostico'> <a className="dropdown-item" href="#">Diagnóstico Duchenne</a> </Link>
                                    <div className="dropdown-divider"></div>
                                <Link className="link" to='/genetica'><a className="dropdown-item" href="#">Geńetica</a></Link>
                                    <div className="dropdown-divider"></div>
                                
                                   
                                <Link className="link" to='/guia-para-padres'><a className="dropdown-item" href="#">Guía para padres</a></Link> 
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Sobre nosotros
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <Link className="link" to='/nuestra-mision'>  <a className="dropdown-item" href="#">Nuestra misión</a> </Link>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Nuestro equipo</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="#">Que hacemos</a>
                                    </div>
                                </li>
                                <li className="nav-item">
                                <Link className="link" to="/sumate"><a className="nav-link">¿Cómo ayudar? <span className="sr-only">(current)</span></a></Link>                   
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Investigaciones
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item">Investigaciones financiadas</a>
                                    <div className="dropdown-divider"></div>
                                        <Link className="link" to="/otras-investigaciones"> <a className="dropdown-item">Otras investigaciones</a></Link>
                                    </div>    
                                </li>
                                <li className="nav-item">
                                <Link className="link" to="/news"><a className="nav-link">Noticias</a></Link> 
                                </li>
                                
                                <li className="nav-item">
                                <Link className="link" to="/transparencia"><a className="nav-link">Transparencia</a></Link>
                                </li>                    
                            </ul>            
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        )
    }
}
export default Navbar;