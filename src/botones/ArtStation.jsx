import React from 'react';
import { FaArtstation } from "react-icons/fa";

function ArtStation({link}){
    return(
    <a href={link} className=''  target="_blank" rel="noopener noreferrer">
            <FaArtstation className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
        </a>
    );
 }
 export default ArtStation;