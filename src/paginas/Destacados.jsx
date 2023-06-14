import React,{useEffect} from 'react'
import Menu from '../elementos/Menu'
import Footer from '../elementos/Footer';
import DestacadosCard from '../componentes/DestacadosCard';
import { Fade } from 'react-awesome-reveal'; 

function Destacados() {
  useEffect(() => {
    document.title = 'IADEV - Destacados'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  const videos =[
    {
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS"
    },   
    {
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS"
    },
    {
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS"
    }, 
    {
      embedUrl: "https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2FAnimacionTESJo%2Fvideos%2F477072454499010%2F&show_text=false&width=560&t=0",
      descripcion: "IADEV VIDEOS"
    }, 

  ]
  return (
    <div>
   <header >
      <Menu/>
      </header>
      <div className='flex justify-center items-center align-center'>
      <div className='my-4'>
      <Fade cascade duration={1500}>
        <span className='font-bold text-xl sm:text-2xl lg:text-4xl border-b-2 py-2 border-red-400  '>Alumnos Destacados</span>
      </Fade>
      </div>
      </div>
      <div className='mx-2'>
        <h1 className='font-semibold text-lg lg:font-bold lg:text-xl mx-2 sm:mx-20 mt-4 sm:mt-20'>En esta sección...</h1>
        <p className='mx-2 sm:mx-20 my-4 sm:mb-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur perferendis, quisquam, quaerat tempore praesentium vero deleniti impedit nobis aliquid rem facere, harum delectus distinctio accusantium beatae officia commodi dicta labore.</p>
      <DestacadosCard
        videos={videos}
      />
      </div>
      <footer>
      <Footer/>
    </footer>
      </div>  
  )
}

export default Destacados