import React from "react";

// COMPONENTE PARA CAMBIARLES LA FUENTE A
// LAS IMAGENES, YA SEA EN BOLD O ITALICA

function Italica({ italica }) {
  return <span className="italic">{italica}</span>;
}
export default Italica;

export function Negrita({ negrita }) {
  return <span className="font-bold">{negrita}</span>;
}
