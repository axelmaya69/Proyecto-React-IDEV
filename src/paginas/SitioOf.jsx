import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade } from 'react-awesome-reveal';

function SitioOf() {
  useEffect(() => {
    document.title = 'FADEV - Sitio Oficial'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
       <header>
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Sitio Oficial</span>
      </Fade>
      </div>
      </div>
      
      <div className='grid grid-cols-4 mx-4 my-4 lg:mx-10 gap-4'>
      <div className="col-span-4 lg:col-span-1 lg:col-start-1 border border-blue-500">
        imagen
      </div>
      <article className='col-span-4 lg:col-start-2 lg:col-span-3'>
        <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi est ipsam officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        </p>
        <p className='my-2'>officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        </p>
        <p className='my-2'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        </p>
        <p className='my-2'>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        officiis accusantium blanditiis temporibus sint quibusdam obcaecati facilis debitis nostrum, voluptate, tempore, ullam voluptatem nobis animi magni nulla at.
        lorem
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, fugit eveniet facilis quis minus perspiciatis dolores quisquam omnis non excepturi accusamus, sapiente consequuntur cum, possimus a aperiam corporis expedita. Consectetur.
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta reiciendis, sequi molestiae fuga harum minus! Tenetur consequuntur placeat numquam ab culpa. Vero perferendis accusamus totam itaque minima quisquam nam dolor!
        </p>
      </article>
      </div>
      <footer>
      <Footer/>
    </footer>
      </div>
  )
}

export default SitioOf;