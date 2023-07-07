import React, {useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import { Fade, Slide } from 'react-awesome-reveal';

function Proyectos() {
  useEffect(() => {
    document.title = 'IADEV - Proyectos'; // Cambia 'Nuevo título de la página' por el título deseado
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
              <h2 className="text-5xl sm:text-7xl my:10 mx-4 lg:text-9xl text-white font-bold">Proyectos</h2> 
              </Slide>
              </div> 
            </div>
          </div>
        </div>
      </div>
      </div> 

      <div className='flex justify-center items-center align-center'>
      <div className='my-4  mb-10'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400 '>Proyectos</span>
      </Fade>
      </div>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-4 mx-2 my-5 lg:mx-10 lg:relative lg:gap-10'>
      <div className='col-span-1 lg:col-start-1 border border-blue-500 p-2 lg:sticky lg:top-0 lg:left-0 lg:max-h-screen lg:mb-48'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis odio ea omnis itaque, tempore saepe ratione sint accusantium laborum, impedit, illum vel. Cupiditate architecto minima commodi quaerat mollitia, quae deserunt?</p>
      </div>
      <div className='col-span-1 lg:col-span-3 lg:col-start-2'>
      <p className='font-bold text-xl my-4 mx-2 sm:mx-10 2xl:mx-40'>En este apartado..</p>
      <p className='mx-2 sm:mx-10 2xl:mx-40'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore iste ratione officiis, dignissimos earum molestias magnam debitis veritatis, nihil distinctio aliquid? Repellat optio voluptate, quam ex id ab laborum cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam accusamus aliquid cupiditate, sequi perspiciatis omnis! Voluptatum ea eius ab accusantium unde tenetur dicta pariatur iste? Magni est necessitatibus iusto! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error eveniet, ea atque voluptates distinctio ipsa id accusantium vitae fugiat sit, numquam nisi iusto quibusdam adipisci corporis! Eligendi minus perferendis sapiente.</p>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 mx-4  gap-4'>
      <div>
        <h1 className='font-bold text-xl my-2'> Proyecto 1</h1>
        <p className='mx-6 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, inventore consequatur blanditiis libero eum doloribus laboriosam quo assumenda quis, voluptates optio reprehenderit facere delectus repellat ratione, asperiores nulla quas numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet laboriosam quam perferendis possimus ducimus labore, reiciendis a sed beatae eaque iure rem unde voluptas consectetur assumenda et quia quidem?  </p>
      </div>
      <div >
        <h2 className='font-bold text-xl my-2'>Proyecto 2</h2>
        <p className='mx-6 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illo facilis necessitatibus similique aliquid unde numquam ratione hic temporibus corrupti est veniam accusantium quisquam non asperiores voluptate consectetur, rem impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis aspernatur, aliquam perferendis nihil necessitatibus adipisci aperiam architecto eum itaque quam consequatur quia laborum, est autem nisi ipsum! Soluta, nostrum.</p>
      </div>
      <div>
    <h3 className='font-bold text-xl my-2'>Proyecto 3</h3>
    <p className='mx-6 my-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic harum temporibus dicta, illo asperiores est delectus provident ea in qui maxime, dolorum neque deserunt, animi ullam laborum? Eaque, itaque labore.lore Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam aliquid corrupti nemo dolore velit autem ut nisi dignissimos unde, illo suscipit ullam exercitationem neque voluptatem iste, dolorem voluptatibus repellat reprehenderit?</p>
      </div>
      <div>
        <h1 className='font-bold text-xl my-2'> Proyecto 4</h1>
        <p className='mx-6 my-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, inventore consequatur blanditiis libero eum doloribus laboriosam quo assumenda quis, voluptates optio reprehenderit facere delectus repellat ratione, asperiores nulla quas numquam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem amet laboriosam quam perferendis possimus ducimus labore, reiciendis a sed beatae eaque iure rem unde voluptas consectetur assumenda et quia quidem?</p>
      </div>
      <div >
        <h2 className='font-bold text-xl my-2'>Proyecto 5</h2>
        <p className='mx-6 my-6'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet illo facilis necessitatibus similique aliquid unde numquam ratione hic temporibus corrupti est veniam accusantium quisquam non asperiores voluptate consectetur, rem impedit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis veritatis aspernatur, aliquam perferendis nihil necessitatibus adipisci aperiam architecto eum itaque quam consequatur quia laborum, est autem nisi ipsum! Soluta, nostrum.</p>
      </div>
      </div>
      </div>
      </div>
      <footer>
      <Footer/>
    </footer>
        </div>
  )
}

export default Proyectos;