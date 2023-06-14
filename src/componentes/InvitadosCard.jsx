import React from 'react';

function InvitadosCard({ imagen }) {
  return (
    <div className='mx-auto my-2 sm: my-6 w-screen sm:w-8/12 flex justify-center'>
      <img src={imagen} alt="imagen" />
    </div>
  );
}

export default InvitadosCard;
