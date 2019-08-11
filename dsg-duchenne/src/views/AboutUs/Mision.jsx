import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import './mision.css'
 
class Mision extends Component{

    render(){
        return(
           <React.Fragment>
                
                    <Navbar/>
               <div className="mision">
                <div className="row ">    
                <div className="body offset-md-1 col-md-8">
                  <h1>    Misión y Principios.  </h1>
                    <h4>
                    La misión de nuestra Fundación es facilitar y acelerar el avance de los tratamientos para
                    niños que padecen DMD, generando recursos y espacios de desarrollo para la intervención e
                    investigación que nos permita avanzar en esta materia.
                    El DSG de nuestro nombre viene de
                    nuestras tres columnas de trabajo:
                    </h4>
                    <div className="AllPoints">
                   <div className="row text-center"> 
                    <div className="points">Detección precoz</div>
                    <div className="points"> Superación de la enfermedad</div>
                   <div className="points">Ganar vida</div> 
                   </div>
                   </div>
                   <div className="values"> 
                    <h4 className="header">
                    Para desarrollar nuestras columnas de trabajo, nuestra Fundación se desarrolla con tres
                    valores fundamentales:
                    </h4>
                    
                    <ul> 
                  <li><h4 className="list">Evidencia científica:</h4> <h5 > Buscamos alentar la generación de tratamientos basados en la ciencia,
                    con evidencia segura y comprobada.
                    </h5></li>
                  <li ><h4 className="list">Accesibilidad:</h4><h5>Nos enfocamos no solo
                    en la búsqueda de nuevas alternativas, sino también en el reposicionamiento de
                    medicamentos ya existentes que puedan contribuir a un tratamiento efectivo.
                    </h5></li>
                  <li><h4 className="list">Transparencia: </h4><h5> En esta travesía la transparencia es fundamental, queremos
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