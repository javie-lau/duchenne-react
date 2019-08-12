import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import images from '../../importImages'
import Footer from '../../components/Footer/Footer'
import './mision.css'


class Team extends Component{

    render(){
        return(
           <React.Fragment>

                <Navbar/>

                    <div id="us"> 
                    <h1 id="our-team"> Nuestro Equipo </h1>  
                    
                      <h2 id="directory">Directorio</h2>
                      <div className="row">
                      <div className="member col-md-6">
                        <img className="photo-team" src={images["persona.png"]} alt="..."/>
                        <h2 className="names">Nicolas Schongut Grollmus</h2><h4 className="ocupation">Fundador y Presidente</h4>
                      </div>
                      <div className="member col-md-6">
                          <img className="photo-team"src={images["persona.png"]} alt="..."/>
                          <h2 className="names">Alejandro Duran</h2><h4 className="ocupation">Fundador</h4>
                      </div>
                      <div className="member col-md-6">
                          <img className="photo-team"src={images["persona.png"]} alt="..."/>
                          ><h2 className="names">Gabriel Rada</h2><h4 className="ocupation">Director</h4>
                      </div>
                      <div className="member col-md-6">
                          <img className="photo-team"src={images["persona.png"]} alt="..."/>
                          <h2 className="names">Mauricio Garro Munizaga</h2><h4 className="ocupation">Secretario</h4>
                      </div>
                      <div className="member col-md-6">
                          <img className="photo-team"src={images["persona.png"]} alt="..."/>
                          <h2 className="names">Fabiola</h2><h4 className="ocupation">Tesorera</h4>
                      </div>
                      </div>
                    
                    </div>

                <Footer/>

    </React.Fragment>

        )
    }
}
export default Team