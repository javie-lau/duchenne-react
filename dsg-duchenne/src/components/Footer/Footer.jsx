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
                  <Link to="/contact"> <a><img className="img-fluid icon-footer" src={images['mail(1).png']} alt=""/></a></Link>
                  
             {/* </div>
             <div className="col-md-6"> */}
                {/* <div className="footer-icons"> */}
                <a  href="https://www.facebook.com/DSGDuchenne/"><img className="img-fluid icon-footer" src={images['facebook-svg-svg.png']} alt=""/></a>
                <a><img className="img-fluid icon-footer" src={images['instagram-svg-svg.png']} alt=""/></a>

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