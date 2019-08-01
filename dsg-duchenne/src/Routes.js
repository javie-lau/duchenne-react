import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Sumate from './views/Sumate';
import WhatIsDuchenne from './views/About-Duchenne/What-is';
import Diagnostic from './views/About-Duchenne/Diagnostic';



const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route path='/que-es-duchenne' component = {WhatIsDuchenne}/>  
            <Route path='/diagnostico' component = {Diagnostic}/>  
            <Route path='/sumate' component = {Sumate}/>

        </Switch>
    )
}
export default Routes;