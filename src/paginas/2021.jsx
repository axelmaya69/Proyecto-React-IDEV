import React,{useEffect} from 'react'
import Menu from '../elementos/Menu';
import Footer from '../elementos/Footer';
import FadevComp from '../componentes/FadevComp';
import AnimatedText from '../componentes/AnimatedText';
import InvitadosCard from '../componentes/InvitadosCard';
import ArtStation from '../botones/ArtStation';
import Behance from '../botones/Behance';
import Facebook from '../botones/Facebook'
import Instagram from '../botones/Instagram';
import LinkedIn from '../botones/LinkedIn';
import WebSite from '../botones/WebSite';
import YouTube from '../botones/YouTube';
import Teams from '../botones/Teams';
import { Fade, Flip, Slide, Hinge, JackInTheBox } from 'react-awesome-reveal';

function Veintiuno() {
  useEffect(() => {
    document.title = 'FADEV - 2021'; // Cambia 'Nuevo título de la página' por el título deseado
  }, []);
  return (
    <div>
       <header >
      <Menu/>
      </header>
      <Slide direction='left'>
      <div className='mb-10 mx-2 md:mx-10 lg:mx-20 ' >   
        <FadevComp
        titulo={<AnimatedText text={"FADEV - 2021"} 
        />} 
        imagen={"https://iadevtesjo.files.wordpress.com/2021/06/perfil.png?w=1024"}
        p1={"Como cada año la División de Ingeniería en Animación Digital y Efectos Visuales adscrita al Tecnológico de Estudios Superiores de Jocotitlán organiza el Festival de Animación Digital y Efectos Visuales (FADEV)."}
        p2={"Este año nuevamente tenemos edición online, con grandes invitado, talleres y proyecciones de trabajos que nos dan una idea del trabajo realizado durante este tiempo."}
        p3={`El tema de este año es: «La industria de la animación», teniendo diferentes puntos de vista de cómo se cera la industria día con día dentro y fuera el país, cuáles son las oportunidades laborales actuales y cómo está el panorama general.`}
        
        p4={"La IADEV te invita a participar en la edición 2021 del FADEV que se llevará a cabo durante los días 30 de junio, 01 y 02 de julio, revisa el programa para que no te pierdas de nada."}
        
        />  
      </div>
      </Slide>

    <div className='grid grid-cols-7 grid-rows-8 sm:gap-y-0 gap-2 '>
    <div className="col-span-3 col-start-3 row-start-1 row-span-1 md:col-span-1 md:col-start-1 md:row-span-8 text-xl text-center md:sticky md:h-32 md:top-64 md:mb-48 md:z-10 pb-4 sm:pb-10 sm:ml-4">
  <Fade cascade damping={0.1}>
    <div className="flex flex-col">
      <button className="bg-red-600 text-white hover:text-violet-800 transition-all duration-300 font-bold text-sm sm:text-xl h-16 text-center justify-center items-center p-2 my-1 w-full"  onClick={() => window.location.href = '#invitados'}>
        Invitados
      </button>
      <button className="bg-green-400 text-white font-bold text-sm sm:text-xl h-16 text-center justify-center items-center p-2 my-1 w-full hover:text-violet-800 transition-all duration-300" onClick={() => window.location.href = '#programa'}>
        Programa
      </button>
      <button className="bg-yellow-400 text-white font-bold text-sm sm:text-xl h-16 text-center justify-center items-center p-2 my-1 w-full hover:text-violet-800 transition-all duration-300" onClick={() => window.location.href = '#conferencias'}> 
        Conferencias
      </button>
      <button className="bg-indigo-400 text-white font-bold text-sm sm:text-xl h-16 text-center justify-center items-center p-2 my-1 w-full hover:text-violet-800 transition-all duration-300" onClick={() => window.location.href = '#talleres'}>
        Talleres
      </button>
    </div>
  </Fade>
</div>

      <div className='col-span-7 row-span-4 row-start-2 md:col-start-2 md:col-span-6 md:row-start-1 gap-2'>
        <div className='py-2' id='invitados'>
        <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-orange-400'> Invitados </span>
      <InvitadosCard
      imagen={"https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_abimael-3.png?w=1024"}
      />
      <div  className="flex flex-wrap justify-center pb-4 sm:pb-10">
    <LinkedIn link={"https://www.linkedin.com/in/abimael-gonzalez-42a00697/"}/> 
      <ArtStation link={"https://www.artstation.com/avii"}/> 
      </div>
      <InvitadosCard 
      imagen={"https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_rubi-1.png?w=1024"}
      />
      <div className="flex flex-wrap justify-center pb-4 sm:pb-10">
       <Behance link={"https://www.behance.net/rArmass"} />
      <LinkedIn link={"https://www.linkedin.com/in/rub%C3%AD-a-70406b147"}/> 
      <WebSite link={"https://armassproductions.com/"}/>
      <Instagram  link={"https://www.instagram.com/rubiarmass/"}/>
      <ArtStation link={"https://www.artstation.com/rubiarmass"}/>
      </div>
      
      <InvitadosCard 
      imagen={"https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_nuria-1.png?w=1024"}
      />
      <div className="flex flex-wrap justify-center pb-4 sm:pb-10">
    <WebSite link={"https://www.nuriamin.com/"}/>
    <ArtStation link={"https://www.artstation.com/nuria_min"}/>
    <Instagram link={"https://instagram.com/nuriamin_art/"}/>
      </div>
      <InvitadosCard 
      imagen={"https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_osvaldo-1.png?w=1024"}
      />
      <div className="flex flex-wrap justify-center pb-4 sm:pb-10">
      <YouTube link={"https://www.youtube.com/c/OsvaldoPasillas"}/>
      <ArtStation link={"https://www.artstation.com/vinman99999"}/>
      <Instagram link={"https://www.instagram.com/osvaldo.pasillas"}/>
      </div>
      <InvitadosCard 
      imagen={"https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_casa-anafre-1.png?w=1024"}
      />
      <div className="flex flex-wrap justify-center pb-4 sm:pb-10">
        <WebSite link={"https://www.casaanafre.com/"}/>
        <Facebook link={"https://www.facebook.com/CasaAnafre"}/>
        <YouTube link={"https://www.youtube.com/channel/UC7l5QasY8PTgs-eCET8tiTQ"}/>
      </div>
      <InvitadosCard 
      imagen={"https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_roxi-1.png?w=1024"}
      />
      <div className="flex flex-wrap justify-center pb-4 sm:pb-10">
        <Instagram link={"https://www.instagram.com/la_cringe_queen/"}/>
      </div>
      <InvitadosCard 
      imagen={"https://iadevtesjo.files.wordpress.com/2021/06/ficha_fadev_alberto-3.png?w=1024"}
      />
        </div>
        
        <div id='programa'>
         <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-blue-400'> Programa</span>
         <div className="flex flex-wrap justify-center py-4 pb-4 sm:pb-10">
          <InvitadosCard 
          imagen={"https://iadevtesjo.files.wordpress.com/2021/06/programa-fadev-2021.png?w=796"}
          />
         </div>
          </div>
        <div id='conferencias'>
          <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-green-400'> Conferencias </span>
          <p className='flex justify-center flex-wrap flex-row  sm:py-4 items-center mx-2 sm:mx-10 sm:text-xl my-4 pb-4'>Las conferencias se realizarán en vivo vía streaming  por el canal oficial de la IADEV. Tienen una duración aproximada de 40 minutos más la sesión de Q&A a los ponentes, posterior a la transmisión del video se subirá la grabación a esta plataforma.</p>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/nuria_tovar_mireles.png?w=1024"}/>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/alberto_ramos-1.png?w=1024"}/>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/abimael_gonzalez.png?w=1024"}/>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/casa_anafre.png?w=1024"}/>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/osvaldo_pasillas_bernal.png?w=1024"}/>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/roxanne_soledad_escutia_gonzalez.png?w=1024"}/>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/carolina_rubi_garcia_sanchez_armass.png?w=1024"}/>
          
          </div>
          
        <div id='talleres'>
          <span className='font-bold text-xl mx-2 sm:mx-10 sm:text-3xl py-4 px-2 border-b-2 border-violet-400'> Talleres </span>
          <p className='flex justify-center flex-wrap flex-row sm:py-4 items-center mx-2 sm:mx-10 sm:text-xl my-4 pb-4'>
          Los talleres se realizarán vía Teams, el acceso se activará 15 minutos antes de cada taller. Solamente se debe dar click en el ícono y se podrá acceder a él.
        <br></br>
          Dentro de cada taller se realizará registro de los asistentes. Los talleres quedarán grabados.
          </p>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/taller-abiel-1.png?w=1024"}/>
          <div className="flex flex-wrap justify-center pb-4 sm:pb-10">
            <Facebook link={"https://fb.watch/6tOkzgPkWM/"}/>
            </div>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/taller-fran.png?w=1024"}/>
          <div className="flex flex-wrap justify-center pb-4 sm:pb-10">
          <Teams link={"https://teams.microsoft.com/dl/launcher/launcher.html?url=%2F_%23%2Fl%2Fmeetup-join%2F19%3AZljLf6fpi7hc3wpWKXpiPZojieuLq1vCDYWVcWuVPkk1%40thread.tacv2%2F1625019801100%3Fcontext%3D%257b%2522Tid%2522%253a%2522885cff60-5507-4fc0-accd-b2b25d3bc6ac%2522%252c%2522Oid%2522%253a%252235550e47-3098-4d26-870f-ab93ddff6a33%2522%257d%26anon%3Dtrue&type=meetup-join&deeplinkId=61aba585-3cbe-4fdc-a920-3c0420a24635&directDl=true&msLaunch=true&enableMobilePage=true&suppressPrompt=true"}/>
            </div>
          <InvitadosCard imagen={"https://iadevtesjo.files.wordpress.com/2021/06/taller-diana.png?w=1024"}/>
          </div> 
      </div> 
    </div>

      <footer>
      <Footer/>
    </footer>
      </div>
  )
}

export default Veintiuno;


