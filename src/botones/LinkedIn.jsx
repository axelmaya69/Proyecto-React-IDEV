import React from 'react'
import { FaLinkedin } from "react-icons/fa";

function LinkedIn({link}) {
    return (
        <a href={link} className=''  target="_blank" rel="noopener noreferrer">
        <FaLinkedin className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
    </a>
    );
  }
  export default LinkedIn;