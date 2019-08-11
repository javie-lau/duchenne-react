import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Carousel from '../components/carousel/Carousel';
import Cards from '../components/Cards/Cards';
import './Home.css';
import Responsive from '../components/slick-slider/Responsive';
import ExplainMoney from '../components/Money/Money';

class Home extends Component {
    render(){
        return(
         <React.Fragment>
            <div className="header">
            <Navbar />
            </div>
            <div className ="body">
              <Carousel/>
              <ExplainMoney/>
            
              <div className="container">
              <Responsive/>
              </div>
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