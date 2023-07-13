import React from "react";
import { Fade } from "react-awesome-reveal";

function InvitadosCard({ imagen }) {
  return (
    <div className="mx-auto px-2 my-2 sm:my-6 w-screen sm:w-8/12 flex justify-center">
      <Fade cascade={true} damping={0.2}>
        <img src={imagen} alt="imagen" className="mt-10 " />
      </Fade>
    </div>
  );
}

export default InvitadosCard;
