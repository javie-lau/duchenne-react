import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './sobre-duchenne.css';

class WhatIsDuchenne extends Component{
  render(){
   return (
     <React.Fragment>
         <Navbar />
         <div className="container-all">
       <h2>¿Qué es la distrofia muscular de Duchenne (DMD)?</h2>
        <div className="container-p"> 
       <p>La distrofia muscular de Duchenne es la forma más frecuente de distrofia muscular, un trastorno de origen genético que debilita progresivamente los músculos del cuerpo.</p>
       <p>Los niños con distrofia muscular de Duchenne pueden empezar a andar más tarde que el promedio, y tienen las pantorrillas grandes cuando tienen entre uno y tres años de edad. La enfermedad suele pasar desapercibida hasta los 3-5 años de edad, cuando la debilidad muscular afecta el andar, subir escaleras y otras actividades.</p>
       <p className='destacar'>Los niños con distrofia muscular de Duchenne pueden: </p>
       <ul>
         <li>correr despacio</li>
         <li>tener problemas para subir escaleras </li>
         <li>caerse a menudo </li>
         <li>caminar de puntillas (sobre los dedos o las almohadillas de los pies)</li>
      </ul>

       <p> Los niños con distrofia muscular de Duchenne también pueden tener dificultades de aprendizaje.</p>
       <p>La distrofia muscular de Duchenne es progresiva, lo que significa que los problemas empeoran con la edad. Cuando un niño con distrofia muscular de Duchenne entra en la adolescencia, la debilidad muscular de todo el cuerpo le puede provocar problemas cardíacos y respiratorios.</p>
       <p> La distrofia muscular de Duchenne ocurre debido a la falta de distrofina, una proteína fabricada por las células musculares. En la distrofia muscular de Duchenne, la falta de un fragmento o la modificación del gen de la distrofina hace que la persona carezca de esta proteína. Esta carencia impide que las fibras musculares funcionen correctamente, lo que conduce a debilidad. </p>
       <p> La distrofia muscular de Duchenne afecta en mayor medida a los niños que a las niñas, porque el gen de la distrofina se encuentra en el cromosoma X. Los niños tienen solo un cromosoma X, mientras que las niñas tienen dos.</p>
       <p> Por lo tanto, las niñas casi siempre pueden fabricar distrofina funcional usando el gen de la distrofina de su segundo cromosoma X.</p>
       <p> Pero las niñas con un solo gen de la distrofia muscular de Duchenne pueden tener calambres musculares, debilidad y problemas cardíacos. Las mujeres que son portadoras del gen de esta enfermedad presentan una deleción (falta de un fragmento) o una modificación del gen, que pueden transmitir a sus hijos. A veces, la modificación o deleción del gen no proviene de la madre, sino que se trata de un cambio genético que aparece en el niño. Esto se llama mutación nueva o de novo. </p>
    
       </div>
     </div>
  
   <div>
    
   </div>
  <Footer/>
   
   </React.Fragment>
   )
  }
}
export default WhatIsDuchenne