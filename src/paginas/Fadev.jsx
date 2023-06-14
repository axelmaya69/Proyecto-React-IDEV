import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function Fadev() {
  useEffect(() => {
    document.title = 'FADEV'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
     <header >
      <Menu/>
      </header>
      <div className='my-10 flex align-center justify-center'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-6xl border-b-2 border-violet-400'>FADEV</span>
      </Fade>
      </div>
      <div className='grid grid-cols-6  mx-2 sm:mx-20'>
        <div className=' col-span-6 sm:col-span-4 sm:col-start-1 sm:row-start-1'>
          <h1 className='font-bold text-xl m-4'>¿Qué es el FADEV?</h1>
          <p className='mx-2 pb-8'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro necessitatibus nemo, magnam fugit quo sunt. Quo molestias debitis, soluta ea nostrum id ad vel ipsum nam, officiis sapiente odit libero? Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eveniet doloremque inventore! Ut et suscipit molestias voluptas dolorem harum sunt fuga voluptatibus dignissimos eaque? Dolorum aperiam autem nihil maiores nisi.</p>
          <p className='mx-2 pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur velit reiciendis cupiditate laudantium, incidunt amet ratione quas consequatur nihil dolorem dolor. Aliquid quidem consectetur earum aspernatur minima commodi ratione.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nesciunt sequi mollitia id dicta iusto libero ratione odit ullam in vero voluptatibus atque veritatis voluptatem qui laboriosam. Voluptatibus, nemo sunt.</p>
          <h2 className='font-bold text-xl m-4'>Por qué hacemos todo esto</h2>
          <p className='mx-2 pb-8'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Minus tenetur velit reiciendis cupiditate laudantium, incidunt amet ratione quas consequatur nihil dolorem dolor. Aliquid quidem consectetur earum aspernatur minima commodi ratione.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, nesciunt sequi mollitia id dicta iusto libero ratione odit ullam in vero voluptatibus atque veritatis voluptatem qui laboriosam. Voluptatibus, nemo sunt.</p>
        </div>
        <div className=' row-start-2 col-span-6 sm:col-span-2 sm:row-start-1'>Imagen</div>
    
      </div>
      
      <footer>
      <Footer/>
    </footer></div>
  )
}

export default Fadev;