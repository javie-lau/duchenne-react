import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import './Form.css';
// import * as typeformEmbed from '@typeform/embed'


class Form extends Component{
    // constructor(props) {
    //     super(props);
    //     this.el = null;
    //   }
    //   componentDidMount() {
    //     if (this.el) {
    //       typeformEmbed.makeWidget(this.el, "https://laurasilva351460.typeform.com/to/lWPvrt", {
    //         hideFooter: true,
    //         hideHeaders: true,
    //         opacity: 0
    //       });
    //     }
    //   }
    render(){
        return(
            <React.Fragment>
{/* 
        <Navbar/>   
        <div ref={(el) => this.el = el} style={{width: '100%', height: '500px'}} />


        <Footer/>      */}

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