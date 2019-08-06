import React, { Component } from 'react';
import './Footer.css';
import images from '../../importImages';
import {Link} from 'react-router-dom';


class Footer extends Component {
    render(){
    return (
     <footer className="footer text-center">
         <div className="row">
             <div className="col-md-12">
               
                  <button><Link  to="/contact"><a  href="#">Contacto</a></Link></button>
                  
             </div>
             <div className="col-md-12">
                <div className="footer-icons">
                <a  href="https://www.facebook.com/DSGDuchenne/"><img className="img-fluid icon-footer" src={images['facebook(1).png']} alt=""/></a>
                <a><img className="img-fluid icon-footer" src={images['instagram(1).png']} alt=""/></a>
                </div>
             </div>
             
        </div>
             <div className="copyright"><p>© 2018 Copyright: DSG-Duchenne</p>
            </div>
     </footer>
    )
    }
}
export default Footer