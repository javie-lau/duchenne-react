import React, { Component } from 'react';
import images from '../../importImages';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './about.css';

class Guide extends Component {
    render(){
        return(
            <React.Fragment>
                        <Navbar />
             <div className="family flex-box"> 
             <h2>Revisa la guía para padres</h2>
             <img className="img-fluid" src={images["familia.png"]}/>
             </div>
             <Footer />
            </React.Fragment>
        )
    }
}
export default Guide