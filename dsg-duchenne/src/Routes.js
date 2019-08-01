import React from 'react';
import { Switch, Route} from 'react-router-dom';
import Home from './views/Home';
import Mision from '../src/views/sobre nosotres/Mision'



const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route path='/nuestra-mision' component ={Mision}/>
        </Switch>
    )
}
export default Routes;