import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/carousel/Carousel';
import Cards from '../components/Cards/Cards';
import Conector from '../components/Conector/Conector';

class Home extends Component {
    render(){
        return(
         <React.Fragment>
            <div className="header">
            <Navbar />
            </div>
            <div className ="body">
              <Carousel/>
               <Cards />
            </div>
             
            <div className= "footer">
              <Footer />
              </div>
         </React.Fragment>

        )
    }
    
}
export default Home;