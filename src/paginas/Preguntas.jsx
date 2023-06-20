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
      <article className='my-20 grid grid-cols-4'>
        <div className='mx-2 row-start-1 col-span-4 lg:col-start-1 lg:col-span-1  border border-blue-500'>imagen</div>
        <div className='col-span-4 lg:col-span-3 lg:col-start-2'>
        <PreguntasFrec 
        pregunta={"Pregunta uno... Similique numquam a officiis maxime eligendi. Sint ullam aspernatur odio sequi nam non rem saepe vel odit fuga eligendi, minus inventore suscipit!"}
        respuesta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis suscipit? Cupiditate nemo obcaecati suscipit tenetur esse repellat at aspernatur deserunt, dolorum cum aliquam praesentium saepe doloremque fugit vel velit?"}
        />
            <PreguntasFrec 
        pregunta={"Pregunta 2"}
        respuesta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis suscipit? Cupiditate nemo obcaecati suscipit tenetur esse repellat at aspernatur deserunt, dolorum cum aliquam praesentium saepe doloremque fugit vel velit?"}
        />
            <PreguntasFrec 
        pregunta={"Pregunta 3"}
        respuesta={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, nobis suscipit? Cupiditate nemo obcaecati suscipit tenetur esse repellat at aspernatur deserunt, dolorum cum aliquam praesentium saepe doloremque fugit vel velit?"}
        />
        </div>
      </article>
      <footer>
      <Footer/>
    </footer>
      </div>
  )
}

export default Preguntas;