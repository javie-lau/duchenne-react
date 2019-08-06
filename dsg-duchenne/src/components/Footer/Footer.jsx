import React, { Component } from 'react';
import './Footer.css';
import images from '../../importImages';


class Footer extends Component {
    render(){
    return (
     <footer className="footer text-center">
             <div className="footer-icons">
             <a  href="https://www.facebook.com/DSGDuchenne/"><img className="img-fluid icon-footer" src={images['facebook(1).png']} alt=""/></a>
             <a><img className="img-fluid icon-footer" src={images['New-Project(11).png']} alt=""/></a>
             </div>
             <div className="copyright"><p>© 2018 Copyright: DSG-Duchenne</p>
            </div>
     </footer>
    )
    }
}
export default Footer