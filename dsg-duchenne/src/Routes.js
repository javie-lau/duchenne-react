import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './views/Home';

import QueEsDuchenne from './views/Sobre-Duchenne/Que-es';

import Sumate from './views/Sumate';



const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  

            <Route path='/que-es-duchenne' component = {QueEsDuchenne}/>  


            <Route path='/sumate' component = {Sumate}/>

        </Switch>
    )
}
export default Routes;