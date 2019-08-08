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
          <h4 className="col-12"> Empresas colaboradoras: </h4>
        </div>
        
        <Slider {...settings}>
          <div>
           <img className="center" src={images['labo2.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['micro2.jpg']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['beba.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['mercado.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['google.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['lipi.png']} alt=""/>
          </div>
          <div>
          <img className="center" src={images['fruna.png']} alt=""/>
          </div>

         
        </Slider>
        
      </div>
    );
  }
}