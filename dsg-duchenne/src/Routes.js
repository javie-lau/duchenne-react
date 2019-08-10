import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './views/Home';
import WhatIsDuchenne from './views/About-Duchenne/What-is';
import Diagnostic from './views/About-Duchenne/Diagnostic';
import Stages from './views/About-Duchenne/Stages';
import Guide from './views/About-Duchenne/Guide';
import Mision from '../src/views/AboutUs/Mision'
import News from './views/News';
import Sumate from './views/Sumate';
import Microdistrofina from './views/investigacion/Microdistrofina';
import Form from './components/Form/Form';
import Article from '../src/views/Article/TemplateArticle';
import Team from '../src/views/AboutUs/Team'
import Exon from './views/investigacion/Exon';

import Transparency from './views/Tranparency';
import Genetics from './views/About-Duchenne/Genetics';
import OtrasInvestigaciones from './views/investigacion/Otrasinvestigaciones';
import Crispr from '../src/views/investigacion/CRISPR'


const Routes = () =>{
    return(
        <Switch>
            <Route exact path='/' component = {Home}/>  
            <Route exact path='/News' component = {News}/>
            <Route exact path='/Home' component = {Home}/>
            <Route path='/nuestra-mision' component ={Mision}/>
            <Route path='/que-es-duchenne' component = {WhatIsDuchenne}/>  
            <Route path='/diagnostico' component = {Diagnostic}/>  
            <Route path='/genetica' component = {Genetics}/>  
            <Route path='/etapas' component = {Stages}/>
            <Route path='/guia-para-padres' component = {Guide}/>
            <Route path='/sumate' component = {Sumate}/>
            <Route path='/investigacion-microdistrofina' component = {Microdistrofina}/>
            <Route path='/transparencia' component = {Transparency}/>
            <Route path='/contact' component = {Form}/>
            <Route path='/investigacion-exon' component = {Exon}/>
            <Route path='/equipo' component = {Team}/>

            <Route path='/otras-investigaciones' component = {OtrasInvestigaciones}/>
            <Route path='/CRISPR' component = {Crispr}/>



            <Route path='/article' component = {Article}/>


        </Switch>
    )
}
export default Routes;