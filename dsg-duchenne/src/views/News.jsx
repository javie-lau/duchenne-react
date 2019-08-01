import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';

class News extends Component{
    render(){
        return(
<React.Fragment>
<div className="header">
            <Navbar />
            </div>
            <div className ="body">
               <Cards />
            </div>
             <div className= "footer">
              <Footer />
              </div>
    
</React.Fragment>
    )} 
    }
    export default News;