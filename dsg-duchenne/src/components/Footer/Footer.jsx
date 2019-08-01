import React, { Component } from 'react';
import './Footer.css';
import images from '../../importImages';


class Footer extends Component {
    render(){
    return (
     <footer className="footer text-center">
         <div className="container">
             <div className="footer-icons">
             <a><img className="img-fluid icon-footer" src={images['facebook(1).png']} alt=""/></a>
             <a><img className="img-fluid icon-footer" src={images['instagram(1).png']} alt=""/></a>
             </div>
             
         </div>

     </footer>
    )
    }
}
export default Footer