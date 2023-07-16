import React from "react";

// COMPONENTE PARA MOSTRAR UNA LISTA CON PUNTOS
// O <ul>, TAMBIEN SE USA EN LA PAGINA DE ACADEMIA

function UnoderList({ items }) {
  return (
    <div className="mx-4 px-4">
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item} </li>
        ))}
      </ul>
    </div>
  );
}

export default UnoderList;
