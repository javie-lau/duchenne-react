import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import './mision.css'
 
class Mision extends Component{

    render(){
        return(
           <React.Fragment>
                
                    <Navbar/>
               <div id="mision" className="container">
                  <h2 id="title-mision">  Nuestra Misión   </h2>
                    <h5 id="explanation">
                    La misión de nuestra Fundación es facilitar y acelerar el avance de los tratamientos para
                    niños que padecen DMD, generando recursos y espacios de desarrollo para la intervención e
                    investigación que nos permita avanzar en esta materia.
                    El DSG de nuestro nombre viene de
                    nuestras tres columnas de trabajo:
                    </h5>
                   <div id="focus"className="row"> 
                    <div className=" points col-md-3"><h5 className="rest-txt"><span className="initials">D</span>etección precoz</h5></div>
                    <div className=" points col-md-5"><h5 className="rest-txt"><span className="initials">S</span>uperación de la enfermedad</h5></div>
                    <div className=" points col-md-4"><h5 className="rest-txt"><span className="initials">G</span>anar vida</h5></div> 
                   </div>
                   <div id="values"> 
                    <h5>
                    Para desarrollar nuestras columnas de trabajo, nuestra Fundación se desarrolla con tres
                    valores fundamentales:
                    </h5>
                    <ul> 
                  <li>
                    <h5>Evidencia científica:</h5>
                   <h5 ><span className="lista">Buscamos alentar la generación de tratamientos basados en la ciencia,
                    con evidencia segura y comprobada.</span>
                    </h5>
                    </li>
                  <li><h5>Accesibilidad:</h5><h5><span className="lista">Nos enfocamos no solo
                    en la búsqueda de nuevas alternativas, sino también en el reposicionamiento de
                    medicamentos ya existentes que puedan contribuir a un tratamiento efectivo.
                    </span></h5></li>
                  <li><h5>Transparencia: </h5><h5> <span className="lista">En esta travesía la transparencia es fundamental, queremos
                    que cualquier persona pueda saber cómo y en qué se utilizan los recursos de esta
                    Fundación.</span>
                    </h5></li>
                  </ul>              
                   
                </div>
              </div>
    <Footer/>
    </React.Fragment>

        )
    }

}
export default Mision