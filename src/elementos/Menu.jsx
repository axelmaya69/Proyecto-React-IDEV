 import React from 'react';
import Header from './Header';
import logoIadev from '../imagenes/logoIadev.png';
import 'tailwindcss/tailwind.css';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div className='relative top-0 left-0 right-0 bg-yellow-400  xl:px-10 my-0'>
      <div className='flex justify-between items-center mr-4 z-50'>
        <div className='flex w-28 my-2 sm:w-44 xl:w-60 2xl:w-96'>
          <Link to={"/"}><img src={logoIadev} alt="Logo-IADEV" /></Link>
        </div>

        <div className='flex my-5 z-50'>
          <Header />
        </div>
      </div>
    </div>
  );
}

export default Menu;
