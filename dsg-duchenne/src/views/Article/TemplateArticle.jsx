
import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './TemplateArticle.css'



class Article extends Component{
      render(){
       return (
         <React.Fragment>
            <Navbar />
              <div id="article" className = "container col-md-8">
                <h2>Según experto, la fisioterapia es esencial para los niños con Duchenne si se administra con cuidado</h2>
                <div className="text-justify"> 
                  <p>  Hace años, los médicos creían que ningún ejercicio era mejor para los niños con distrofia muscular de Duchenne (DMD). Hoy, todos los expertos en DMD están de acuerdo: el ejercicio extiende la vida.<br></br>

                       <br></br>      Pero, ¿qué tipo de ejercicio es ideal para los niños con Duchenne? ¿Cuánto es demasiado? ¿Y qué hay del estiramiento, las férulas nocturnas y el equipo especializado?

La fisioterapeuta Claudia Senesac , que ha estado trabajando con niños con Duchenne durante casi 40 años, se encuentra entre los que pueden ayudar a responder este tipo de preguntas.
<p><br></br>
Un fisioterapeuta demuestra la técnica adecuada durante la conferencia CureDuchenne's Futures en Boston. (Fotos de Larry Luxner)
Senesac es profesor clínico asociado de fisioterapia en el Colegio de Salud Pública de la Universidad de Florida. A fines de junio, dio una conferencia sobre el tema "Por qué la terapia física es tan importante en Duchenne" en la conferencia anual de Distrofia Muscular del Proyecto de Padres de 2019  en Orlando.
<br></br>
<p>
En un extremo, dijo, hay padres atléticos que presionan demasiado a sus hijos cuando se trata de hacer ejercicio. En el otro están aquellos que quieren llevar a sus hijos a todas partes.
</p> <br></br>

“Si un niño se queja de dolor muscular, eso es demasiado. Si un niño termina sentado el resto del día después de una actividad, eso es demasiado ", dijo. “No quieres que hagan tanto que realmente están dañando sus músculos durante la actividad. No conocemos ese punto óptimo entre lo que es demasiado y lo que es suficiente, por lo que nos gusta equivocarnos con precaución ”.
<p><br></br>
"En última instancia, es decisión de los padres", agregó. "Estoy caminando en una línea muy fina, brindando atención, diciéndoles cuáles son las opciones y tratando de ser razonable".
</p>           </p> </p>   </div>
             </div>
            <Footer/>  
        </React.Fragment>
       )
      }
    }

export default Article