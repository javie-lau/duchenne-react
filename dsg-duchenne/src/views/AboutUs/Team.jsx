import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer'


class Team extends Component{

    render(){
        return(
           <React.Fragment>
                
                    <Navbar/>
                            <h1> Nuestro Equipo </h1>  
             <ul> <h4>Directorio</h4>
                 <li>Nicolas Schongut Grollmus Fundador y Presidente</li>
                  <li>Nicolas Schongut Grollmus Fundador y Presidente</li>
                  <li>Alejandro Duran ¿? Fundador</li>
               <li>Fabiola ¿? Tesorera</li>
              <li>Mauricio Garro Munizaga Secretario</li>
                <li>Directos Gabriel Rada ?</li>
                </ul>
                   <Footer/>
    </React.Fragment>

        )
    }

}
export default Team