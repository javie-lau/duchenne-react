import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import images from '../importImages';

class Transparency extends Component{
    render(){
        return(
         <div>
             <React.Fragment>

                 <Navbar/>
                <div> 
                <h2>Presupuesto para la investigación</h2>
                <img className="img-fluid" src={images["New-Project(12).png"]} alt=""/>
                </div>
                  <Footer/>

             </React.Fragment>
         </div>
        )
    }
}
export default Transparency;