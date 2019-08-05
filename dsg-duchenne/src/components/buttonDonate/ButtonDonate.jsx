import React, { Component } from 'react';
import '../buttonDonate/buttonDonate.css'

class ButtonDonate extends Component{
    render(){
        return(
            <div>
                <button type="button" className="donate btn btn-primary btn-lg btn-block"><i class="fas fa-heart">--Sumate a esta iniciativa--</i></button>
            </div>

        )
    }
}
export default ButtonDonate