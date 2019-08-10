import React, { Component } from 'react';
import './Footer.css';
import images from '../../importImages';
import {Link} from 'react-router-dom';


class Footer extends Component {
    constructor(){
        super()
    }
    
    render(){
    return (
     <footer className="footer text-center">
         <div className="row">
             {/* <div className="col-md-6"> */}
               <div className="container">
               <a><img className="img-fluid icon-footer" src={images['phone1.svg']} alt=""/></a>

                  <Link to="/contact"><a><img className="img-fluid icon-footer" src={images['envelope1.svg']} alt=""/></a></Link>
                  
             {/* </div>
             <div className="col-md-6"> */}
                {/* <div className="footer-icons"> */}

                <a  target='_blank' href="https://www.facebook.com/DSGDuchenne/"><img className="img-fluid icon-footer" src={images['facebook1.svg']} alt=""/></a>
                <a><img className="img-fluid icon-footer" src={images['instagram1.svg']} alt=""/></a>


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