import React from "react";
import { Fade } from "react-awesome-reveal";

// ESTE COMPONENTE SIRVE PARA MOSTRAR LAS
// IMAGENES DE LOS INVITADOS Y DEMAS COMO TALLERES
// Y CONFERENCIAS
function InvitadosCard({ imagen }) {
  return (
    <div className="mx-2 w-auto h-auto flex justify-center items-center">
      <Fade cascade={true} damping={0.2}>
        <img
          src={imagen}
          alt="imagen"
          className="mt-10 border-t-2 p-2 lg:p-10 lg:w-11/12"
        />
      </Fade>
    </div>
  );
}

export default InvitadosCard;
