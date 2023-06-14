import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function Investigacion() {
  useEffect(() => {
    document.title = 'IADEV - Investigación'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
     <header>
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-violet-400  '>Investigación</span>
      </Fade>
      </div>
      </div>

    <p className='mx-2 sm:mx-10 lg:mx-40 py-4 sm:text-xl sm:pb-20'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore. Iure esse doloribus debitis nostrum distinctio quasi est nulla delectus aliquid dolores harum, cupiditate quibusdam in reiciendis repudiandae nemo. Nisi.
      <br />
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed quod illum voluptatem eveniet dolore, quis debitis voluptate numquam et enim eligendi autem minus ipsam excepturi consequatur animi est iste!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam, iure numquam suscipit neque excepturi in exercitationem nesciunt alias voluptas nam quo quidem illum deleniti rerum eaque veritatis est accusantium.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, labore? Sit, odit unde commodi modi qui sequi corporis assumenda quasi optio cupiditate hic adipisci. Optio sequi asperiores ipsa adipisci accusantium.
      <br />
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore. Iure esse doloribus debitis nostrum distinctio quasi est nulla delectus aliquid dolores harum, cupiditate quibusdam in reiciendis repudiandae nemo. Nisi.
      <br />
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed quod illum voluptatem eveniet dolore, quis debitis voluptate numquam et enim eligendi autem minus ipsam excepturi consequatur animi est iste!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam, iure numquam suscipit neque excepturi in exercitationem nesciunt alias voluptas nam quo quidem illum deleniti rerum eaque veritatis est accusantium.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, labore? Sit, odit unde commodi modi qui sequi corporis assumenda quasi optio cupiditate hic adipisci. Optio sequi asperiores ipsa adipisci accusantium.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, inventore. Iure esse doloribus debitis nostrum distinctio quasi est nulla delectus aliquid dolores harum, cupiditate quibusdam in reiciendis repudiandae nemo. Nisi.
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil sed quod illum voluptatem eveniet dolore, quis debitis voluptate numquam et enim eligendi autem minus ipsam excepturi consequatur animi est iste!
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quam, iure numquam suscipit neque excepturi in exercitationem nesciunt alias voluptas nam quo quidem illum deleniti rerum eaque veritatis est accusantium.
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur, labore? Sit, odit unde commodi modi qui sequi corporis assumenda quasi optio cupiditate hic adipisci. Optio sequi asperiores ipsa adipisci accusantium.
    </p>

      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default Investigacion;