import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import './mision.css'
 
class Mision extends Component{

    render(){
        return(
           <React.Fragment>
                
                    <Navbar/>
               <div id="mision">
                <div className="row ">    
                <div className="offset-md-1 col-md-8">
                  <h1 id="title-mision">  Nuestra Misión   </h1>
                    <h4 id="explanation">
                    La misión de nuestra Fundación es facilitar y acelerar el avance de los tratamientos para
                    niños que padecen DMD, generando recursos y espacios de desarrollo para la intervención e
                    investigación que nos permita avanzar en esta materia.
                    El DSG de nuestro nombre viene de
                    nuestras tres columnas de trabajo:
                    </h4>
                   <div id="focus"className="row col-md-12"> 
                    <div className="row points"><h3 className="rest-txt"><span className="initials">D</span>etección precoz</h3></div>
                    <div className="row points"><h3 className="rest-txt"><span className="initials">S</span>uperación de la enfermedad</h3></div>
                    <div className="row points"><h3 className="rest-txt"><span className="initials">G</span>anar vida</h3></div> 
                   </div>
                   <div className="values"> 
                    <h5>
                    <h2 id="values">  Nuestros Valores  </h2>
                    Para desarrollar nuestras columnas de trabajo, nuestra Fundación se desarrolla con tres
                    valores fundamentales:
                    </h5>
                    <ul> 
                  <li><h5 className="list">Evidencia científica:</h5> <h5 > Buscamos alentar la generación de tratamientos basados en la ciencia,
                    con evidencia segura y comprobada.
                    </h5></li>
                  <li ><h5 className="list">Accesibilidad:</h5><h5>Nos enfocamos no solo
                    en la búsqueda de nuevas alternativas, sino también en el reposicionamiento de
                    medicamentos ya existentes que puedan contribuir a un tratamiento efectivo.
                    </h5></li>
                  <li><h5 className="list">Transparencia: </h5><h5> En esta travesía la transparencia es fundamental, queremos
                    que cualquier persona pueda saber cómo y en qué se utilizan los recursos de esta
                    Fundación.
                    </h5></li>
                  </ul> 
                        

                    

                    </div>
                    </div>   
</div>
</div>
    <Footer/>
    </React.Fragment>

        )
    }

}
export default Mision