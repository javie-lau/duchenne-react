import React, { Component } from 'react';
import './Cards.css';
import { News } from '../data/News.json'
// import Article from '../../views/Article/TemplateArticle'
import { Link } from 'react-router-dom';


class Cards extends Component{
  constructor(props) {
    super(props);
    this.state = {
      showComponent:false,
      News:News
    };
  } 
  click(event){
      this.setState({
        showComponent:true
     })
    } 
    render(){
      const News = this.state.News.map((News , i)=>{
        return (
          <div className="col-lg-4 col-md-6  col-sm-6 mt-4 mb-4">
          <div className="card">
            <img  src={News.img} className="card-img-top" alt="imagen sobre investigacion"/>
            <div className="card-body">
              <div className="row">
              <div className="card-title">
                <h3>Title</h3>
              </div>
              <div className="card-date">
                <p>21.12.2019</p>
              </div>
              </div>
             <div className="text"> 
             <Link  to='/article'>  <a className="card-text " href="#">{News.title}</a></Link>
             </div>
             <div className="card-button">
             <Link  to='/article'><a className="btn-more" onClick={this.click.bind(this)} href="" >Leer más</a></Link>
              {/* {this.state.showComponent ? <Article/>: null} */}
             </div>
          
            </div>
          </div>
          </div>
  
      )
      })
        return(
    <React.Fragment> 
      <div  id="news">
        <h4>Ultimas noticias:</h4>
        <hr id="divider"></hr>
        <div className="container">
        <div className="row">
          {News}
        </div>
        </div>
      </div>
    </React.Fragment>
        )
    } 
}
export default Cards;


