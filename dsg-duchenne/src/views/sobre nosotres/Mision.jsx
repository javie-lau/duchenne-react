import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'
import './mision.css'

class Mision extends Component{

    render(){
        return(
            <div className="mision">
                <div className="header">
                    <Navbar/>
                </div>
                <div className="body">
                  <h2> 
                    Misión y Principios de la Fundación DSG-Duchenne
                  </h2>
                    <p>
La Distrofia Muscular de Duchenne (DMD) es una enfermedad genética que afecta a 1 de
3.500 niños varones, que se caracteriza por un debilitamiento progresivo de los músculos
esqueléticos, como también del diafragma y corazón, disminuyendo la calidad y la
expectativa de vida de los niños que padecen esta condición genética.
La misión de nuestra Fundación es facilitar y acelerar el avance de los tratamientos para
niños que padecen DMD, generando recursos y espacios de desarrollo para la intervención e
investigación que nos permita avanzar en esta materia. El DSG de nuestro nombre viene de
nuestras tres columnas de trabajo:
</p>
<p>

1. Detección precoz: Duchenne es una enfermedad genética, que en un 60% de los
casos se transmite por uno de los cromosomas X de la madre biológica del niño. Su
diagnóstico precoz permite alertar tempranamente del posible factor hereditario en
las familias, otorgándole a éstas la posibilidad de decidir si desean tener más hijos o
no. Esto les permite identificar el riesgo, dándoles las herramientas necesarias para
realizar una planificación familiar responsable. Asimismo, un diagnóstico temprano
permite trabajar con los niños para enlentecer el desarrollo de la distrofia.
</p>
<p>
2. Superación de la enfermedad: Duchenne es una de las enfermedades genéticas raras
más frecuentes en la población infantil y el principal factor genético de muerte en
niños a nivel mundial. Por ello es crucial el desarrollo de nuevas alternativas de
tratamiento que permitan enlentecer, detener y revertir las consecuencias
musculares causadas por este defecto genético.
</p>
<p>
3. Ganar vida: nuestro proyecto busca que mediante el desarrollo y la investigación
científica miles de niños en el mundo ganen vida, tanto en calidad mejorando la
forma en que viven, así como también en cantidad, extendiendo la expectativa de
vida de niños con Distrofia Muscular de Duchenne.
</p>
<p>
Para desarrollar nuestras columnas de trabajo, nuestra Fundación se desarrolla con tres
valores fundamentales:
</p>
<p>
Evidencia científica: buscamos alentar la generación de tratamientos basados en la ciencia,
con evidencia segura y comprobada.
</p>
<p>
Accesibilidad: queremos fomentar el desarrollo de tratamientos que sean accesibles
económicamente para la mayor cantidad de niños posibles. Para eso nos enfocamos no solo
en la búsqueda de nuevas alternativas, sino también en el reposicionamiento de
medicamentos ya existentes que puedan contribuir a un tratamiento efectivo de esta
condición.
</p>
<p>
Transparencia: nuestro objetivo final es mejorar la vida de los niños que sufren Distrofia
Muscular de Duchenne. En esta travesía la transparencia es fundamental, porque queremos
que cualquier persona pueda saber cómo y en qué se utilizan los recursos de esta
Fundación.
</p>

                </div>
                <div className="footer">
                    <Footer/>
                </div>
            </div>
        )
    }

}
export default Mision