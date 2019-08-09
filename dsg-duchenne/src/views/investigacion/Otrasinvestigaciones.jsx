import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import images from '../../importImages';
import {Link } from 'react-router-dom';
import ButtonDonate from '../../components/buttonDonate/ButtonDonate'
import './otrasInvestigaciones.css'


class OtrasInvestigaciones extends Component{
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                    <div id="othinv">
                        <div className="row">
                            <div className="card col-md-3 offset-md-1" >
                                    <div className="card-body">
                                        <h5 className="card-title">MICRODISTROFINA</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">Un gen miniaturizado intenta salvar a los niños</h6>
                                        <p className="card-text">La micro-distrofina es una versión abreviada de la proteína distrofina que conserva sus componentes y funciones principales.</p>
                                        <Link to="/investigacion-microdistrofina"><a href="#" className="card-link">Articulo completo</a></Link> 
                                    </div>
                            </div>
                            <div className=" card col-md-3 offset-md-1" >
                                <div className="card-body">
                                    <h5 className="card-title">Exón skipping</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Nueva estrategia farmacologica para la distrofia muscular de Duchenne.</h6>
                                    <p className="card-text"> Los científicos han demostrado que esta técnica es efectiva en un modelo de distrofia muscular de Duchenne en ratones (el ratón mdx) y en biopsias musculares de personas con Duchenne..</p>
                                    <Link to="/investigacion-exon"><a href="#" className="card-link">Articulo completo</a></Link>
                                </div>
                            </div>
                            <div className="card col-md-3 offset-md-1" >
                                <div className="card-body">
                                    <h5 className="card-title">Tratamiento CRISPR / Cas9</h5>
                                    <h6 className="card-subtitle mb-2 text-muted">Es una tecnología médica nueva y poderosa.</h6>
                                    <p className="card-text">Se basa en el sistema natural de las bacterias para  protegerse de las infecciones virales.</p>
                                    <Link to="/CRISPR"> <a href="#" className="card-link">Articulo completo</a></Link>   
                                </div>
                            </div>
                        </div>                   
                        <ButtonDonate/>
                    </div>    
                <Footer/>
           
            </React.Fragment>
        )
    }
}
export default OtrasInvestigaciones