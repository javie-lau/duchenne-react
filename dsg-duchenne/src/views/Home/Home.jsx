import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import Carousel from '../../components/carousel/Carousel';
import Cards from '../../components/Cards/Cards';
import './Home.css';
import Responsive from '../../components/slick-slider/Responsive';
import ExplainMoney from '../../components/Money/Money';

class Home extends Component {
    render(){
        return(
         <React.Fragment>
           
            <Navbar />
            
           
              <Carousel/>
              <div className="container responsive">
              <ExplainMoney/> 
              <Responsive/>
              
              
              <Cards /> 
              
              </div>
         
           
          
              <Footer />
      
         </React.Fragment>

        )
    }
    
}
export default Home;