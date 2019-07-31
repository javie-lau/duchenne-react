import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Carousel from '../components/carousel/Carousel'
class Home extends Component {
    render(){
        return(
         <React.Fragment>
            <div className="header">
            <Navbar />
            </div>
            <div className ="body">
              <Carousel/>
            </div>
         </React.Fragment>
        )
    }
    
}
export default Home;