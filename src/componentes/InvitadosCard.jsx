import React from "react";
import { Fade } from "react-awesome-reveal";

function InvitadosCard({ imagen }) {
  return (
    <div className="mx-2 w-auto h-auto flex justify-center items-center">
      <Fade cascade={true} damping={0.2}>
        <img src={imagen} alt="imagen" className="mt-10 border-t-2 py-10" />
      </Fade>
    </div>
  );
}

export default InvitadosCard;
