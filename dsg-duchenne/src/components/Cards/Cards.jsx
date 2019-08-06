import React, { Component } from 'react';
import './Cards.css';

class Cards extends Component{
    render(){
        return(
<React.Fragment> 
  <div className="container" id="news">
   <h5 className="newsText"> Últimas Noticias</h5> 
<div className="row card-group">
  <div className="card col-md-4 col-12">
    <img className="col-12 col-md-3 img-news" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMaJ54GmDduYGMbSMgeUlpNe4nEjs8oZMcxEL68b7VntL0xdLe9g" className="card-img-top" alt="..."></img>
    <div className="card-body">
      <p className="card-text ">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a className="btn-more" href="#" > > Leer más</a>
   </div>
  </div>
  <div className="card col-md-4 col-12">
    <img src="http://isanidad.com/wp-content/uploads/2019/03/investigacio%CC%81n-cli%CC%81nica-plataforma-Roche.jpg" class="card-img-top" alt="..."></img>
    <div className="card-body">
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <a className="btn-more" href="#" >> Leer más</a>
    </div>
  </div>
  <div className="card col-md-4 col-12">
      <img src="https://f1.media.brightcove.com/8/3850378299001/3850378299001_5537454316001_5537448372001-vs.jpg?pubId=3850378299001&videoId=5537448372001" class="card-img-top" alt="..."></img>
      <div className="card-body">
      <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <a className="btn-more" href="#" > > Leer más</a>
    </div>
  </div>

</div>
</div>



    </React.Fragment>
        )
    } 
}
export default Cards;


