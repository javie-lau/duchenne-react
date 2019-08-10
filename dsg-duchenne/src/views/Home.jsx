import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/carousel/Carousel';
import Cards from '../components/Cards/Cards';
import './Home.css';
import Responsive from '../components/slick-slider/Responsive';

class Home extends Component {
    render(){
        return(
         <React.Fragment>
           
            <Navbar />
            
           
              <Carousel/>
              <div className="container responsive">
              <Responsive/>
            
              
              <Cards /> 
              
              </div>
         
           
          
              <Footer />
      
         </React.Fragment>

        )
    }
    
}
export default Home;