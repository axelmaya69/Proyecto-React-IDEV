import React from 'react'

import { FiInstagram } from "react-icons/fi";

function Instagram({link}) {
    return (
        <a href={link} className=''  target="_blank" rel="noopener noreferrer">
        <FiInstagram className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
    </a>
    );
  }
  export default Instagram;