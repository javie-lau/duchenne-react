import React, { Component } from 'react';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

class Sumate extends Component {
    render(){
        return(
            <React.Fragment>
                <Navbar/>
                <Footer />
            </React.Fragment>
        )
    }
}
export default Sumate;