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
            <div id="txt-one" className="offset-md-5 col-md-6">
              <h2 id="fundation">Fundación</h2>
              <h3 id="dsg">DSG-Duchenne</h3>
              <div id="divider"></div>
              <h5 id="enfoque"> Enfocados en encontrar la cura para la Distrofia Muscular Duchenne</h5>
            </div>
              <img id="bkg1" src={images['portada1.png']} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <div id="txt-two"> 
            <h5 id="sabias-que">¿Sabías qué?</h5>
            <h2 id="dato-duro">La expectativa de vida en Latinoamérica para de niños con Distrofia Muscular de Duchennees de 20 años</h2> 
            <h5 id="europa">mientras que en Europa es de 45 años</h5>
            <h2 id="por-eso">Por eso tu apoyo es fundamental para encontrar la cura</h2>
            </div>
            <img id="bkg2" src={images['dna(1).png']} className="d-block w-100" alt="..."/>
          </div>

          <div class="carousel-item">
            <div id="txt-three">
              <h1 id="duch">Duchenne</h1>
              <h2 id="awarness">AWARNESS</h2>
              <h2 id="day">DAY</h2>
              <h2 id="date">7 SEP</h2>
            </div>
            <img id="world" src={images['mundo.png']}  alt="..."/>
            <img id="linea" src={images['linea.png']}  alt="..."/>

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