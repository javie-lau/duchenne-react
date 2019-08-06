import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import * as typeformEmbed from '@typeform/embed'


class Form extends Component{
    constructor(props) {
        super(props);
        this.el = null;
      }
      componentDidMount() {
        if (this.el) {
          typeformEmbed.makeWidget(this.el, "https://laurasilva351460.typeform.com/to/lWPvrt", {
            hideFooter: true,
            hideHeaders: true,
            opacity: 0
          });
        }
      }
    render(){
        return(
            <React.Fragment>
        <Navbar/>   
        <div ref={(el) => this.el = el} style={{width: '100%', height: '500px'}} />


        <Footer/>     
            </React.Fragment>
        )
    }
}
export default Form;