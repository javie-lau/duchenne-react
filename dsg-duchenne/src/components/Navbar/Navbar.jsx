import React, { Component } from 'react';
import './Navbar.css';
import images from '../../importImages';

import { Link } from 'react-router-dom';



class Navbar extends Component{
    render(){
        return(

            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="row">
                    <div className="col-8 col-md-4">
                    <a className="navbar-brand" href="/Home"><img className="img-fluid" src={images['logo.jpg']} alt=""/></a>
                    </div>
                    <div className="col-4 col-md-2 offset-md-6">
                        <Link  to="/sumate"><button className="btn"><i class="fas fa-heart"> Sumate</i></button></Link>
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
                   <Link className='link' to='/diagnostico'> <a className="dropdown-item" href="#">Diagnostico Duchenne</a> </Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Etapas de duchenne</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sobre nosotros
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link to='/nuestra-mision'>  <a className="dropdown-item" href="#">Nuestra misión</a> </Link>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Nuestro equipo</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Que hacemos</a>
                    </div>
                </li>
                <li className="nav-item">
                <Link className="link" to="/sumate"><a className="nav-link">¿Cómo ayudar? <span className="sr-only">(current)</span></a></Link>
                   
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="/News">Noticias</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Transparencia</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
                </ul>
            
            </div>
</nav>
</React.Fragment>
        )
    }
}
export default Navbar;