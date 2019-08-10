import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './about.css';


class Genetics extends Component{
    render(){
        return(
            <React.Fragment>
             
             <Navbar/>
            <div id="genetics">
             <div className="row">
               <div className="container col-md-8">
                 <h2>Duchenne en la genética</h2>
               <div className="container-p"> 
                <h4>Causas genéticas</h4>
                <p>La distrofia muscular Duchenne puede transmitirse de padres a hijos , o puede ser el resultado de mutaciones genéticas espontáneas aleatorias, que pueden ocurrir durante cualquier embarazo. De hecho, aproximadamente uno de cada tres casos ocurre en familias sin antecedentes de Duchenn</p>
                <p>Para entender cómo Duchenne puede ocurrir una o más veces en una familia, es útil comprender algunos conceptos de genética básica.</p>
                <p>Nosotros, los humanos, tenemos 23 pares de cromosomas, o 46 en total, en cada célula de nuestro cuerpo: </p>
                <ul>
                  <li>44 autosomas (pares 1-22</li>  
                  <li>2 cromosomas sexuales (par 23)</li>
                </ul>
                <p>Los cromosomas sexuales en las mujeres son dos cromosomas X. Los cromosomas sexuales en los hombres son uno X y uno Y. Cada padre aporta un cromosoma de cada par, por lo que los niños obtienen la mitad de sus cromosomas de su madre y la otra mitad de su padre. Los hombres siempre obtienen su cromosoma X de su madre y su cromosoma Y de su padre. Las hembras obtienen un cromosoma X de cada padre.</p>
                <p>El gen Duchenne se encuentra en el cromosoma X . Por lo tanto, Duchenne es una afección ligada al cromosoma X y puede transmitirse de las mujeres, que son portadoras de la mutación genética, principalmente a sus hijos.</p>
                <p>Si una mujer porta una mutación en el gen que codifica su distrofina, con cada embarazo tendrá un 50% de posibilidades de transmitir el gen con la mutación.</p>
                <ul>
                  <li> Cada vez que una mujer portadora tiene un hijo , hay un 50% de posibilidades (o 1 de 2) de que se vea afectado con Duchenne.</li>
                  <li>Cada vez que una mujer portadora tiene una hija , hay un 50% de posibilidades (o 1 de 2) de que sea portadora o portadora manifestante.</li>
                </ul>
                <p>Las madres portandoras no tienen control sobre qué copia de su cromosoma X transmiten a sus hijos.</p>
                <p>Duchenne también puede ocurrir sin pasar de padres a hijos. Si no, como resultado de mutaciones genéticas espontáneas aleatorias, que pueden ocurrir durante cualquier embarazo. Aproximadamente 1 de cada 3 casos ocurre en familias sin antecedentes de Duchenne. En otras palabras, puede afectar a cualquiera y atraviesa todas las razas y culturas.</p>
                <p>Dado que las mujeres tienen dos copias del cromosoma X, si una copia tiene una mutación del gen de la distrofina, generalmente no se ven afectadas porque tienen un segundo cromosoma X ( una "copia de seguridad" ) con una copia normal del gen. Sin embargo, dado que los hombres solo tienen una copia del cromosoma X, si ese cromosoma tiene una mutación del gen de la distrofina se verán afectados con Duchenne porque no tienen un segundo cromosoma X como las mujeres. Entonces, la diferencia en el número de cromosomas X explica por qué Duchenne se ve con mayor frecuencia en los hombres.</p>
               
                <h4>¿Cómo pueden verse afectadas las mujeres?</h4>

                <p>Las mujeres con una mutación genética de distrofina se llaman portadoras. Las mamas portadoras tienen una mayor probabilidad de tener hijos con Duchenne e hijas portadortas. Las mujeres portadoras generalmente no se ven afectadas con Duchenne porque producen suficiente proteína distrofina. Sin embargo, las mujeres pueden tener algunos síntomas de Duchenne , como debilidad muscular y problemas cardíacos . Aunque es raro, algunas mujeres pueden exhibir los síntomas clásicos de Duchenne. Esto se conoce como portador de manifestación. Por lo que es importante que las mujeres portadoras se revisen con profesionales con conocimientos de Duchenne.</p>
                <p>El examen genético tanto para madres portadoras y niños se puede realizar en el laboratorio clínico de la Universidad Católica de Chile o la Clínica Las Condes</p>
               </div>
               </div>
            </div>
             
           

         
            </div>
            <Footer/>


            </React.Fragment>
            
        )
    }
}
export default Genetics;