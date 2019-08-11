import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './about.css';
import Conector from '../../components/Conector/Conector';
import { Link } from 'react-router-dom';
 
class WhatIsDuchenne extends Component{
  render(){
   return (
     <React.Fragment> 
         <Navbar />
      <div id="what-is" className="container">  
      <h2>¿Qué es la Distrofia Muscular de Duchenne (DMD)?</h2>  
      <div className="row">
      
        <div className="col-md-8">
            
              <p>La Distrofia Muscular de Duchenne es la forma más frecuente de <span className="text-span">distrofia muscular</span>, un trastorno de origen <span className="text-span">genético</span> que debilita progresivamente los músculos del cuerpo.</p>
              <p>Los niños con esta enfermedad pueden empezar a andar más tarde que el promedio, y tienen las pantorrillas grandes cuando tienen entre uno y tres años de edad. La enfermedad suele pasar desapercibida hasta los 3-5 años de edad, cuando la debilidad muscular afecta el andar, subir escaleras y otras actividades.</p>
              <p>Los niños con DMD pueden: </p>
              <ul>
                <li><span className="lista">correr despacio</span></li>
                <li><span className="lista">tener problemas para subir escaleras</span> </li>
                <li><span className="lista">caerse a menudo</span></li>
                <li><span className="lista">caminar de puntillas (sobre los dedos o las almohadillas de los pies)</span></li>
              </ul>
              <p> Los niños con Distrofia Muscular de Duchenne también pueden tener dificultades de aprendizaje.</p>
              <p>Esta enfemedad es <span className="text-span">progresiva</span>, lo que significa que los problemas empeoran con la edad. Cuando un niño entra en la adolescencia, la debilidad muscular de todo el cuerpo le puede provocar <span className="text-span">problemas cardíacos y respiratorios</span>.</p>
              <p> Este tipo de distrofia muscular ocurre debido a la falta de distrofina, una proteína fabricada por las células musculares. En la distrofia muscular de Duchenne, la falta de un fragmento o la modificación del gen de la distrofina hace que la persona carezca de esta proteína. Esta carencia impide que las fibras musculares funcionen correctamente, lo que conduce a debilidad. </p>
              <p> DMD afecta en mayor medida a los niños que a las niñas, porque el gen de la distrofina se encuentra en el cromosoma X. Los niños tienen solo un cromosoma X, mientras que las niñas tienen dos.</p>
              <p> Por lo tanto, las niñas casi siempre pueden fabricar distrofina funcional usando el gen de la distrofina de su segundo cromosoma X.</p>
              <p> Pero las niñas con un solo gen de la distrofia muscular de Duchenne pueden tener calambres musculares, debilidad y problemas cardíacos. Las mujeres que son portadoras del gen de esta enfermedad presentan una deleción (falta de un fragmento) o una modificación del gen, que pueden transmitir a sus hijos. A veces, la modificación o deleción del gen no proviene de la madre, sino que se trata de un cambio genético que aparece en el niño. Esto se llama mutación nueva o de novo. </p>
            
          </div>
          <div className="col-md-3">

           <Link className="link" to="/diagnostico"><Conector title="Diagnóstico"/></Link>
           <Link className="link" to="/genetica"><Conector title="Genética"/></Link>
           <Link className="link" to="/guia-para-padres"><Conector title="Guía para padres"/></Link>
            
             
               
              </div>
          </div>
      </div>
  <Footer/>
   
   </React.Fragment>
   )
  }
}
export default WhatIsDuchenne