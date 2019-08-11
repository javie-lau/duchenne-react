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
            <div id="txt-one" className="offset-md-5 col-md-6 flex-center">
              <h1 id="fundation">Fundación</h1>
              <h1 id="dsg">DSG-Duchenne</h1>
              <hr id="divider"></hr>
              <h3 id="enfoque"> Enfocados en encontrar la cura para la Distrofia Muscular Duchenne</h3>
            </div>
              <img id="bkg1" src={images['portada1.png']} className="d-block w-100" alt="..."/>
          </div>
          <div className="carousel-item">
            <div id="txt-two" className="offset-md-1 col-md-10 flex-center"> 
            <h5 id="sabias-que" >¿Sabías qué?</h5>
            <h1 id="dato-duro" className="rectangulo-red">La expectativa de vida en Latinoamérica para niños con Distrofia Muscular de Duchenne es de 20 años</h1> 
            <h5 id="europa">mientras que en Europa es de 45 años</h5>
            <h1 id="por-eso" className="rectangulo-blue">¡Por eso tu apoyo es fundamental para encontrar la cura!</h1>
            </div>
            {/* <img id="charity-l" src={images['charity(1).svg']} alt="..."/>
            <img id="charity-r" src={images['charity(1).svg']} alt="..."/> */}
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