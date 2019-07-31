import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Cards from '../components/Cards/Cards'
class Home extends Component {
    render(){
        return(
            <React.Fragment>
                 <Navbar />
            <Cards />
            </React.Fragment>
           
        )
    }
    
}
export default Home;