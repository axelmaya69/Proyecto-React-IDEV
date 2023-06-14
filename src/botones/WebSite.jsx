import React from 'react'
import { CgWebsite } from "react-icons/cg";

function WebSite({link}) {
    return (
        <a href={link} className=''  target="_blank" rel="noopener noreferrer">
        <CgWebsite className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
    </a>
    );
  }
  export default WebSite;