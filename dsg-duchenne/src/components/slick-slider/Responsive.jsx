import React, { Component } from "react";
import Slider from "react-slick";
import images from "../../importImages";
import './Responsive.css';

export default class Responsive extends Component {
  render() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }; 
    return (
      <div id="sslider">
        <div className="row">
          <h4 className="col-12"> Empresas colaboradoras </h4>
          <hr id="divider"></hr>
        </div>
        
        <Slider {...settings}>
          <div>
           <a  target="_blank" href="https://www.laboratoria.la/"><img className="center" src={images['labo2.png']} alt=""/></a>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['logoejemplo.png']} alt=""/>
          </div>

         
        </Slider>
        
      </div>
    );
  }
}