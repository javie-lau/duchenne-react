import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import News from './views/News';

import Mision from '../src/views/sobre nosotres/Mision'

import Sumate from './views/Sumate';
import WhatIsDuchenne from './views/About-Duchenne/What-is';
import Diagnostic from './views/About-Duchenne/Diagnostic';
import Investigation from './views/investigacion/Investigation'




const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route exact path='/News' component = {News}/>
            <Route exact path='/Home' component = {Home}/>

            <Route path='/nuestra-mision' component ={Mision}/>

            <Route path='/que-es-duchenne' component = {WhatIsDuchenne}/>  
            <Route path='/diagnostico' component = {Diagnostic}/>  
            <Route path='/sumate' component = {Sumate}/>
            <Route path='/investigacion' component = {Investigation}/>



        </Switch>
    )
}
export default Routes;