import React, {Component}from 'react';
import images from '../../importImages';
import './Carousel.css'
import { Link } from 'react-router-dom';

class  Carousel extends Component{


    render(){
        return(
            <div className="carousel">
        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={images['donar(4).png']} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <img src={images['donar(3).png']}className="d-block w-100" alt="..."/>
          </div>
          <div class="carousel-item">
           <Link to="/investigacion-microdistrofina"> <img src={images['donar(2).png']} className="d-block w-100" alt="..."/></Link>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      </div>
      
      )
    }
}

export default Carousel;