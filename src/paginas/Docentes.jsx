import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import DocentesCard from '../componentes/DocentesCard';
import AnimatedText from '../componentes/AnimatedText';
import { AnimatedTextFt } from '../componentes/AnimatedText';
import { Fade,Slide } from 'react-awesome-reveal';
import Facebook from '../botones/Facebook';

function Docentes() {
  useEffect(() => {
    document.title = 'IADEV - Docentes'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
   <header >
      <Menu/>
      </header>
      <div>
        <Slide>
        <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Docentes</span>
      </Fade>
      </div>
      </div>
        </Slide>
      </div>
      <div className='flex flex-wrap justify-around my-10'>
      <div>
        <DocentesCard
        imagen={"https://www.wikihow.com/images/6/68/Link-Within-a-Page-Using-HTML-Step-8.jpg"}
        nombre={<AnimatedText text={"Axel Daniel Bartolo Maya"}/>}
        grado={<AnimatedTextFt text={"Ingeniero en Sistemas"}/>}
        texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, ea quod alias et vel blanditiis soluta. Reprehenderit quod, exercitationem fugiat, perspiciatis omnis commodi dolores mollitia laborum sapiente rerum quis!Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aliquid repellat, velit necessitatibus maxime iusto, fuga dolores expedita adipisci laborum cumque dolorem perspiciatis minus fugit? Exercitationem culpa omnis accusantium dolorum!"}
        enlace={"https://www.facebook.com/"} 
        red={"Facebook"}
        
        />
        
      </div>
      <div className='flex'>
        <DocentesCard
        imagen={"https://concepto.de/wp-content/uploads/2018/08/persona-e1533759204552.jpg"}
        nombre={<AnimatedText text={"Julio César Chávez"}/>}
        grado={<AnimatedTextFt text={"Ingeniero en Animación Digital  "}/>}
        texto={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus dolorem, ea quod alias et vel blanditiis soluta. Reprehenderitatibus maxime iusto, fuga dolores expedita adipisci laborum cumque dolorem perspiciatis minus fugit? Exercitationem culpa omnis accusantium dolorum!"}
        enlace={"https://www.facebook.com/"}
        red={"LinkeIN"}
        />
      </div>
      </div>
      Docentes
      <footer>
      <Footer/>
    </footer></div>
  )
}

export default Docentes;