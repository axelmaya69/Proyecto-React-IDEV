import React from "react";
import { Fade } from "react-awesome-reveal";

function OnlyText({ title, text }) {
  return (
    <div className="border sm:border-2 rounded p-2 my-10 sm:p-4 shadow-2xl mx-2 lg:mx-10 md:mx-20 lg:pt-10 lg:pb-20 lg:min-h-screen bg-white ">
      <Fade cascade={true} damping={0.2}>
        <h2
          className="text-lg font-bold mx-2 mb-5 mt-4
        lg:text-3xl lg:font-bold 2xl:text-4xl border-b border-orange-400 pb-3"
        >
          {title}
        </h2>
        <p className="mx-2 p-2 lg:flex lg:items-center lg:justify-center flex-col">
          {text}
        </p>
      </Fade>
    </div>
  );
}

export default OnlyText;
