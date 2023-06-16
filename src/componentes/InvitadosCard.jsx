import React from 'react';
import { Slide } from 'react-awesome-reveal';

function InvitadosCard({ imagen }) {
  return (
    <div className='mx-auto my-2 sm:my-6 w-screen sm:w-8/12 flex justify-center'>
      <Slide direction='right'>
      <img src={imagen} alt="imagen" className='mt-10'/>
      </Slide>
    </div>
  );
}

export default InvitadosCard;
