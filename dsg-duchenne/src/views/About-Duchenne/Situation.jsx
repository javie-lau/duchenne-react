import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './about.css';

class Situation extends Component{
    render(){
        return(
         <React.Fragment>
             <Navbar/>
             <div id="situation">
               <h1 id="title-situation">Situación País</h1>
               <p className="situation-p">La situación actual en Chile para tratar el DMD es solo paliativa. Entre las entidades que ofrecen tratamiento se encuentran el Instituto Teletón y el Hospital de niños Roberto del Río de la Región Metropolitana.</p>
               <p className="situation-p">El tratamiento de la enfermedad requiere equipos multidisciplinarios, liderados generalmente por neurólogos, que ayudan a la mejora en la calidad de vida de los pacientes con Distrofia Muscular de Duchenne. </p>
               <p className="situation-p">Los tratamientos dependen de la etapa de evolución de la enfermedad en que se encuentran el paciente e incluyen evaluaciones cardiológicas, brocopulmonar y kinésicas. Ejercicios de elongación y tratamientos traumatologicos también son necesarios para el desarrollo de independencia y la mejora de vida de los pacientes.</p>
               <p className="situation-p">La ayuda psicológica también informa parte ndispensables para el bienestar de los niños y sus familias que sufren esta enfermedad.</p>
               <p className="situation-p">Según un <a id="info"href="https://www.minsal.cl/wp-content/uploads/2017/10/distrofia-muscular-de-Duchenne-OK.pdf">informe</a> publicado por el MINSAL, en Chile los costos asociados a la Distrofia Muscular de Duchenne son muy altos y no todos los pacientes pueden acceder a ellos.</p>
               <p className="situation-p">Uno de los que llama la atención, se encuentra el examen genético, para mujeres, que ayuda a detectar el gen portador de la enfermedad y por lo tanto frenarla, que bordea los $150.000.-</p>
             
             </div>
             <Footer/>

         </React.Fragment>

        )
    }
}
export default Situation;
