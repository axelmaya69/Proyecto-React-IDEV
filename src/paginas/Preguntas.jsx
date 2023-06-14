import React,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';
import PreguntasFrec from '../componentes/PreguntasFrec';

function Preguntas(){
  useEffect(() => {
  document.title = 'IADEV - Preguntas Frecuentes'; // Cambia 'Nuevo título de la página' por el título deseado
}, []);
  return (
    <div>
        <header>
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Preguntas Frecuentes</span>
      </Fade>
      </div>
      </div>
      <article className='my-20'>
        <PreguntasFrec 
        pregunta={"hola"}
        respuesta={"mundo"}
        />
            <PreguntasFrec 
        pregunta={"hola"}
        respuesta={"mundo"}
        />
            <PreguntasFrec 
        pregunta={"hola"}
        respuesta={"mundo"}
        />
      </article>
      <footer>
      <Footer/>
    </footer>
      </div>
  )
}

export default Preguntas;