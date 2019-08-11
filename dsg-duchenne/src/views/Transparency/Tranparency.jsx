import React, { Component } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import './Transparency.css';
import ExplainMoney from '../../components/Money/Money';

class Transparency extends Component{
    render(){
        return(
         <div>
             <React.Fragment>
                <Navbar/>
                <div id="transparency">
                        <h1 className="titles-trans">Transparencia</h1>
                        <h5>Para mantener la confianza de nuestros socios y donantes, es importane conocer el destino de los fondos recaudados.</h5>
                 
                    <ExplainMoney/>

                    <div className="all-accounts"> 
                        <div className="col-md-4 offset-md-4 offset-1 col-10">
                            <h1 className="titles-trans">Cuentas claras</h1>
                            <h5 className="sub-title">Revisa el detalle de nuestras cuentas anuales</h5>
                            <select id="accounts" placeholder="año">
                               <option value="2019">2019</option>
                               <option value="2020">2020</option>
                            </select>
                        </div >
                        {/* <div className="offset-1 col-md-4">
                            <img className="img-fluid" src={images["pdf-trans.png"]} alt=""/>
                        </div> */}
                    </div>
                </div>

                <Footer/>
             </React.Fragment>
         </div>
        )
    }
}
export default Transparency;