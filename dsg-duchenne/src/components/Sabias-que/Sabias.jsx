import React, {Component}from 'react';
import { Link } from 'react-router-dom';
import images from '../../importImages';
import './Sabias.css';

class Sabias extends Component{
    render(){
        return(
           
             <Link className="link" to='/sumate'>
             {/* <div className="sabias">
             <h5 id="sabias-que" >¿Sabías qué?</h5>
             <h1 id="dato-duro" className="rectangulo-red">La expectativa de vida en Latinoamérica para niños con Distrofia Muscular de Duchenne es de 20 años</h1> 
             <h5 id="europa">mientras que en Europa es de 45 años</h5>
             <h1 id="por-eso" className="rectangulo-blue">¡Por eso tu apoyo es fundamental para encontrar la cura!</h1>
             <hr id="divider"></hr>
             </div>
   */}
             <div id="join" className="row">
             <h1>Todos Juntos por la cura de Duchenne <img className="img-fluid heart" src={images['like2.svg']} alt="..." /></h1>
             </div>
             


             </Link>
        )
    }
}
export default Sabias;