import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Form.css';

class Form extends Component{
    render(){
        return(
            <React.Fragment>
        <Navbar/>  
        <div  id="form">
          <div className="row">
                        <form className="col-md-6 offset-md-3">
                            <h4>¡Contactenos!</h4>
                            <div className="row">
                                <div className="col-12">
                                <label  for="email">Tu email:</label>
                                </div>
                                <div className="col-12">
                                <input  type="email" id="email" name="email" placeholder="email"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label  for="theme">Tema:</label>
                                </div>
                                <div className="col-12">
                                <input  type="text" id="fname" name="theme" placeholder="Tema de mensaje.."/>
                                </div>
                            </div>
                            <div className="row">  
                                <div className="col-12">                        
                                    <label  for="subject">Mensaje:</label>
                                </div>  
                                <div className="col-12">
                                    <textarea  id="subject" name="subject" placeholder="Escribe algo.."></textarea>
                                </div>
                            </div>   
                            <input  type="submit" value="Enviar"/>
                            
                        </form>
                 
                        </div>
                        </div>       
                        <Footer/>     
            </React.Fragment>
        )
    }
}
export default Form;