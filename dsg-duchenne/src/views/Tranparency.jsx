import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import images from '../importImages';
import './Transparency.css';

class Transparency extends Component{
    render(){
        return(
         <div>
             <React.Fragment>
                <Navbar/>
                <div id="transparency"> 
                    <h2>Presupuesto para la investigación</h2>
                    <img className="img-fluid icons" src={images["save-money-svg-svg.png"]} alt=""/>
                    <img className="img-fluid " src={images["icons8-abajo-2-52(1).png"]} alt=""/>
                    <img className="img-fluid icons" src={images["microscope-svg-svg.png"]} alt=""/>
                    <img className="img-fluid" src={images["icons8-abajo-2-52(1).png"]} alt=""/>
                    <img className="img-fluid icons" src={images["family(2)-svg.png"]} alt=""/>
                </div>
                <Footer/>
             </React.Fragment>
         </div>
        )
    }
}
export default Transparency;