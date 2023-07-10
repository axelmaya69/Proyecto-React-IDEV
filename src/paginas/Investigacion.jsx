import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade, Slide } from 'react-awesome-reveal';

function Investigacion() {
  useEffect(() => {
    document.title = 'IADEV - Investigación'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
     <header>
      <Menu/>
      </header>

      <div>
      <div
        className="relative min-h-full overflow-hidden bg-[url('https://images.reporteindigo.com/wp-content/uploads/2023/01/cine-de-animacion-pixelatl.jpg')] bg-cover bg-no-repeat p-12 text-start"
        style={{ height: '900px',backgroundPosition: 'start center'}}
      >
        <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-fixed bg-black bg-opacity-60">
          <div className="h-full " >
            <div className="my-40 lg:my-32">
              <div>
            <Slide direction='up'>
              <h2 className="text-5xl sm:text-7xl my:10 mx-4 lg:text-9xl text-white font-bold">Investigación</h2> 
              </Slide>
              </div> 
            </div>
          </div>
        </div>
      </div>
      </div> 



      <div className='flex justify-center items-center align-center'>
      <div className='my-4 flex-wrap'>
      <Fade cascade duration={1500}>
        <h1 className='font-bold text-xl sm:text-2xl flex-wrap lg:text-4xl border-b-2 py-2 border-violet-400  '>Investigación</h1>
      </Fade>
      </div>
      </div>
<div className='grid grid-cols-4 gap-4 my-10 lg:mx-10 mx-2 lg:relative'>
  <div className='col-span-4 mx-2 border border-blue-500 lg:col-span-1 lg:sticky lg:top-0 lg:left-0 lg:bottom-0 lg:max-h-screen lg:mb-48 '>
    imagen
  </div>
  <div className='col-span-4 lg:col-span-3'>
    <p className='mx-2 sm:mx-10 py-4 sm:text-xl sm:pb-20'>
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
    </div>
    </div>
      <footer>
      <Footer/>
      </footer>
    </div>
  )
}

export default Investigacion;