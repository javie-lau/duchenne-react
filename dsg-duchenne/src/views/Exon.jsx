import React, {Component}from 'react';
import images from '../importImages';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer'
import ButtonDonate from '../components/buttonDonate/ButtonDonate'

class Exon extends Component{
    render(){
        return(
            <div className="exon">
                <div className="header">
                    <Navbar/>
                </div>
                <div className="body">
                <div className="row">
                        <div className="offset-md-1 col-md-7">
                            <h1>Exón skipping</h1>
                            <p>
                            En los últimos años se han generado varios ensayos clínicos, como nunca antes.
La gran mayoría se están realizando en países como USA o Europa. Pero en
Sudamérica también se trabaja en ellos.
Una de las primeras investigaciones y la más adelantada es la del exón skipping o
salto de exón.
                            </p>
                            <p>
                            Empezaremos explicando que es un gen. Un gen es una sección
de  ADN  que contiene las instrucciones para la producción de
una  proteína  específica . Las proteínas son partes esenciales de
las  células  y juegan un papel en cada proceso que ocurre dentro de
la célula, además de tener funciones estructurales o mecánicas que
ayudan a mantener la forma de las células. Se estima que tenemos
unos 25,000 genes diferentes.
                            </p>
                            <p>
                            Los genes se dividen en secciones
llamadas  exones  e  intrones  . Los exones son las secciones de
ADN que codifican para la proteína y están intercalados con intrones
que a veces también se llaman &#39;ADN basura&#39;.Los intrones se cortan
y se descartan en el proceso de producción de proteínas, para dejar
solo los exones. El gen de la distrofina es nuestro gen más grande:
tiene 79 exones que se unen como las piezas de un rompecabezas.</p>
<img src={images['exon.jpg']} className="img-fluid"/>
<p>
    En la distrofia muscular de Duchenne, se elimina un exón o exones que interfieren con el resto del gen que se une. En nuestro ejemplo (usando los exones 50-57), el exón 52 ilustra esto:
</p>
<img src={images['exon2.jpg']} className="img-fluid"/>
<p>
El exón 51 no puede unirse con el exón 53, lo que impide que se ensamblen el resto de los exones. Para que la proteína distrofina funcione, debe tener ambos extremos de la proteína. Por lo tanto, esta mutación da como resultado una proteína distrofina completamente no funcional y los síntomas graves de la distrofia muscular de Duchenne
</p>
<img src={images['exon3.jpg']} className="img-fluid"/>
<p>
Como su nombre lo indica, el principio de omisión de exón es alentar a la maquinaria celular a "omitir" un exón. Pequeños trozos de ADN llamados oligonucleótidos antisentido (AO) o ' parches moleculares ' se utilizan para enmascarar el exón que desea omitir, de modo que se ignore durante la producción de proteínas. En nuestro ejemplo, si usamos un 'parche molecular o yeso' diseñado para enmascarar el exón 53:
</p>
<img src={images['exon4.jpg']} className="img-fluid"/>
<p>
El exón 51 ahora puede unirse al exón 54 y continuar produciendo el resto de la proteína, con los exones 52 y 53 ausentes en el medio:
</p>
<img src={images['exon5.jpg']} className="img-fluid"/>
<p>
Hasta ahora, los científicos han demostrado que esta técnica es efectiva en un modelo de distrofia muscular de Duchenne en ratones (el ratón mdx) y en biopsias musculares de personas con distrofia muscular de Duchenne.
Se han llevado a cabo varios ensayos clínicos que muestran que inyectar un parche molecular en el torrente sanguíneo o debajo de la piel produce la producción de distrofina en los músculos. En general, los parches moleculares han sido bien tolerados, aunque el perfil de efectos secundarios de los diferentes parches varía y algunos causan problemas relacionados con la piel y los riñones. Hay dos compañías involucradas en la realización de ensayos clínicos de omisión de exón. El principio de la omisión de exón es el mismo para todos los ensayos clínicos, pero el parche molecular que se está probando tiene una formulación química ligeramente diferente.
Ahora bien, el gen de la distrofina es muy grande y los errores genéticos asociados con la distrofia muscular de Duchenne ocurren en diferentes lugares a lo largo de este gen. Sin embargo, existen algunas áreas comunes para las mutaciones e inicialmente se crearán 'parches moleculares' para estas. Por ejemplo, la omisión del exón 51 sería aplicable para alrededor del 13% de los niños. Una vez que se haya demostrado que la tecnología es efectiva para un error en particular, será posible diseñar otros 'parches'.</p>
<p>Los científicos esperan que este tipo de terapia detenga o incluso revierta los síntomas de la distrofia muscular de Duchenne para que los síntomas sean más parecidos a los de los niños con distrofia muscular de Becker.No será una cura porque si se demuestra que es efectivo, este tratamiento debería repetirse regularmente, con qué frecuencia se hará evidente durante los ensayos clínicos.

</p>
<p>
  Actualmente se están evaluando varias <a href="https://clinicaltrials.gov/ct2/results?cond=Duchenne+Muscular+Dystrophy&term=Sarepta&cntry1=&state1=&Search=Search">terapias de omisión</a> de exónen en <a href="https://clinicaltrials.gov/ct2/results?cond=Duchenne+Muscular+Dystrophy&term=Sarepta&cntry1=&state1=&Search=Search">ensayos clínicos</a> . La Administración de Alimentos y Medicamentos de los EE. UU. (FDA, por sus siglas en inglés) aprobó en forma acelerada un tratamiento para el exón 51  como <a href="https://www.ncbi.nlm.nih.gov/pubmed/28796573">terapia DMD</a>  en septiembre de 2016, y ahora está disponible bajo la marca <a href="https://musculardystrophynews.com/exondys-51-eteplirsen-sarepta-therapeutics">Exondys 51</a>  (eteplirsen)  de <a href="https://www.sarepta.com/our-pipeline">Sarepta Therapeutics</a>  .


</p>
<p>
  
Información sacada de:</p>
<p>
 <a href="https://www.musculardystrophyuk.org/">www.musculardystrophyuk.org</a> 
 </p>
 <a href="https://musculardystrophynews.com/">www.musculardystrophynews.com</a> 
<p>


</p>
<p className="finalText">
                    Este contenido no pretende ser un sustituto del consejo médico
profesional, diagnóstico o tratamiento. Siempre busque el consejo de su
médico u otro proveedor de salud calificado con cualquier pregunta que
pueda tener con respecto a una afección médica.
                    </p>

                            
                        <ButtonDonate/>

                        </div>
                </div>            

                </div>
                <div className="footer">
                     <Footer/>
                 </div>
            </div>
   

        )
    }
}
 export default Exon