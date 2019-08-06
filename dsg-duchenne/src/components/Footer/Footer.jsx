import React, { Component } from 'react';
import './Footer.css';
import images from '../../importImages';
import {Link} from 'react-router-dom';


class Footer extends Component {
    render(){
    return (
     <footer className="footer text-center">

         <div className="row">
             {/* <div className="col-md-6"> */}
               <div className="container">
                  <button><Link to="/contact">Contacto</Link></button>
                  
             {/* </div>
             <div className="col-md-6"> */}
                {/* <div className="footer-icons"> */}
                <a  href="https://www.facebook.com/DSGDuchenne/"><img className="img-fluid icon-footer" src={images['facebook(1).png']} alt=""/></a>
                <a><img className="img-fluid icon-footer" src={images['New-Project(11).png']} alt=""/></a>

                {/* </div> */}
                </div> 

        </div>
             
        {/* </div> */}
             <div className="copyright"><p>© 2018 Copyright: DSG-Duchenne</p>
            </div>
     </footer>
    )
    }
}
export default Footer