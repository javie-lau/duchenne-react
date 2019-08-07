import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import images from '../../importImages';
import {Link } from 'react-router-dom';
import ButtonDonate from '../../components/buttonDonate/ButtonDonate'

class OtrasInvestigaciones extends Component{
    render(){
        return(
            <React.Fragment>
                 <Navbar/>
                 <div className="body">
                     


                 </div>





              <ButtonDonate/>
              <Footer/>
           
            </React.Fragment>
        )
    }
}
export default OtrasInvestigaciones