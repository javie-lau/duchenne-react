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
                        <div id="guide">
                            <div className="container"> 
                                <h2>Revisa la guía recomendada para padres</h2>
                                <a className="" href="http://www.treat-nmd.eu/downloads/file/standardsofcare/dmd/spanish/dmdmdffg_master_spanish_upa.pdf"> <p>Guía para padres</p></a>
                                <img className="center img-fluid family-img" src={images["family(1)-svg-svg.png"]}/>
                            </div>
                        </div>
                    <Footer />
            </React.Fragment>
        )
    }
}
export default Guide