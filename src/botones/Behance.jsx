import React from 'react'
import { ImBehance2 } from "react-icons/im";

function Behance({link}) {
    return (
          <a href={link} className=''  target="_blank" rel="noopener noreferrer">
              <ImBehance2 className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
          </a>
    );
}
export default Behance;