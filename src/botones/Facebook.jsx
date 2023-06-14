import React from 'react';
import { BsFacebook } from "react-icons/bs";

function Facebook({link}) {
    return (
        <a href={link} className=''  target="_blank" rel="noopener noreferrer">
        <BsFacebook className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
    </a>
    );
  }
  export default Facebook;