import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Cards from '../components/Cards/Cards';
import './News.css'

class News extends Component{
    render(){
        return(
        <React.Fragment>
            <Navbar />  
                <div className="news">
                <Cards />
                </div>
            <Footer />
        </React.Fragment>
    )} 
    }
    export default News;