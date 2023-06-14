import React from 'react'
import { BsMicrosoftTeams } from "react-icons/bs";

function Teams({link    }) {
  return (
    <a href={link} className=''  target="_blank" rel="noopener noreferrer">
    <BsMicrosoftTeams className='mx-4 text-xl sm:text-4xl sm:hover:scale-125 transition-all duration-400'/>
</a>
  )
}

export default Teams;