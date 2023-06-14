import React from 'react'
import { FiYoutube } from "react-icons/fi";

 function YouTube({link}) {
    return (
        <a href={link} className=''  target="_blank" rel="noopener noreferrer">
        <FiYoutube className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
    </a>
    );
  }

  export default YouTube;