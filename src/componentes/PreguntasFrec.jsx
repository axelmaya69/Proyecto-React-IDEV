import React from "react";

// ESTE ES EL COMPONENTE DE PREGUNTAS FRECUENTES, EL CUAL
// SIRVE PARA MOSTRARLAS SIN NECESIDAD DE ESCRIBIR NUEVOS ESTILOS Y DEMAS
// SE USA EN LA PAGINA CON EL MISMO NOMBRE

function PreguntasFrec({ pregunta, respuesta }) {
  return (
    <div className=" mx-2 my-4">
      <span className=" font-bold text-xl">{pregunta}</span>
      <p>{respuesta}</p>
    </div>
  );
}

export default PreguntasFrec;
