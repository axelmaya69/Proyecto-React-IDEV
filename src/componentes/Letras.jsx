import React from 'react';

function Italica({italica}){
    return(
    <span className='italic'>{italica}</span>
    );
}
export default Italica;

export function Negrita({negrita}){
    return(
    <span className='font-bold'>{negrita}</span>
    );
}

