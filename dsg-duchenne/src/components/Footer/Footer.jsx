import React, { Component } from 'react';
import './Footer.css';
import images from '../../importImages';


class Footer extends Component {
    render(){
    return (
     <footer className="footer text-center">
         <div className="container">
             <div className="footer-icons">
             <img className="img-fluid icon-footer" src={images['facebook(1).png']} alt=""/>
             <img className="img-fluid icon-footer" src={images['instagram(1).png']} alt=""/>
             </div>
             
         </div>

     </footer>
    )
    }
}
export default Footer