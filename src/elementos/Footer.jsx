import React from 'react';
import { CiFacebook, CiInstagram, CiYoutube } from "react-icons/ci";
import { FaTiktok } from 'react-icons/fa';

function Footer() {
  return (
    <div className='grid grid-cols-1 bg-black text-white p-10 sm:grid-cols-2 gap-10 sm:text-md'>
  
    <div className='my-4 pb-4 border-y-2 border-white-400 w-full'>
    <span className='text-2xl py-2 sm:py-6 sm:my-4  2xl:text-4xl'> Información</span>
    <ul className='py-2 2xl:text-2xl'>
    <li className='py-1  '> Tecnológico de Estudios Superiores de Jocotitlán</li>
  <li className='py-1'>Carretera Toluca-Atlacomulco km 44.8, Ejido de San Juan y San Agustin, Jocotitlán, Edo. México</li>
  <li className='py-1 hover:text-zinc-400 '><a className='border-b border-white pb-1 ' href="https://www.facebook.com/Tesjocotitlan/?locale=es_LA" target='_blank'>TesJocotitlán </a> </li>
  <li className='py-1 mb-2'>Tel: (01712) 1231313</li>
  </ul>
      </div> 
       <div className='my-4 pb-4 border-y-2 grid grid-cols-1  grid-rows-3 border-white-400 w-full gap-8'>
        <span className='text-2xl row-span-1 col-start-1 py-2 2xl:text-4xl'>Contacto</span>
      <ul className='flex flex-wrap text-center row-span-2 items-center justify-around row-start-2 2xl:text-2xl gap-2 lg:gap-8'>
        <li className='sm:w-auto sm:text-xl sm:hover:scale-125 transition-all duration-400 2xl:text-3xl hover:-translate-y-6 '>
          <a href="https://www.facebook.com/festivalfadev" target='_blank'>
            Facebook <CiFacebook size={32} className='ml-6 sm:ml-6 2xl:ml-14'/>
          </a>
        </li>
        <li className='sm:w-auto sm:text-xl sm:hover:scale-125 transition-all duration-400 hover:-translate-y-6 2xl:text-3xl'>
          Instagram <CiInstagram size={32} className='ml-6 sm:ml-6 2xl:ml-16' />
        </li>
        <li className='sm:w-auto sm:text-xl sm:hover:scale-125 transition-all duration-400 2xl:text-3xl hover:-translate-y-6 '>
          YouTube <CiYoutube size={32} className='ml-4 sm:ml-6 2xl:ml-10'/>
        </li>
        <li className='sm:w-auto sm:text-xl sm:hover:scale-125 transition-all duration-400 2xl:text-3xl hover:-translate-y-6 '>
          TikTok <FaTiktok size={32} className='ml-4 '/>
        </li>
      </ul>
    </div>
    </div>    
  );
}

export default Footer;
