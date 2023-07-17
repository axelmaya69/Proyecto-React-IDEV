import React from "react";

//ESTE COMPONENTE SIRVE PARA MOSTRAR UNA "TARJETA" QUE MUESTRA
//LOS PROYECTOS DE LA IADEV, INCLUYE EL NOMBRE DEL PROYECTO Y LA
//DESCRIPCION.

function ProyectosCard({ name, description }) {
  return (
    <div>
      <div className="border-2 shadow-2xl my-4 mx-2 pb-10 pt-5">
        <h4 className="font-bold m-4 text-xl">{name}</h4>
        <p className="m-4">{description}</p>
      </div>
    </div>
  );
}

export default ProyectosCard;
