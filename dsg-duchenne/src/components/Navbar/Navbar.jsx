import React, { Component } from 'react';
import './Navbar.css';
import images from '../../importImages';


class Navbar extends Component{
    render(){
        return(
            <React.Fragment>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="row">
                    <div className="col-8 col-md-4">
                    <a className="navbar-brand" href="#"><img className="img-fluid" src={images['logo.jpg']} alt=""/></a>
                    </div>
                    <div className="col-4 col-md-2 offset-md-6">
                        <button className="btn">Sumate</button>
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

                    <a className="dropdown-item" href="#">Action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ¿Qué hacemos?
                    </a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">¿Cómo ayudarnos? <span className="sr-only">(current)</span></a>
                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="#">Action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Another action</a>
                    <div className="dropdown-divider"></div>
                    <a className="dropdown-item" href="#">Something else here</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Noticias</a>
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