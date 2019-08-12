import React, {Component}from 'react';
import { Link } from 'react-router-dom';
import './Sabias.css';

class Sabias extends Component{
    render(){
        return(
           
             <div className="sabias">
             <h5 id="sabias-que" >¿Sabías qué?</h5>
             <h1 id="dato-duro" className="rectangulo-red">La expectativa de vida en Latinoamérica para niños con Distrofia Muscular de Duchenne es de 20 años</h1> 
             <h5 id="europa">mientras que en Europa es de 45 años</h5>
             <h1 id="por-eso" className="rectangulo-blue">¡Por eso tu apoyo es fundamental para encontrar la cura!</h1>
             <hr id="divider"></hr>

             </div>
        )
    }
}
export default Sabias;