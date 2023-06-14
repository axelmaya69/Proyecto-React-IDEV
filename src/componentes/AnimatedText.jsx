import React, { useEffect, useState } from 'react';

function AnimatedText({ text}) {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let animationTimeout;
    let i = 0;

    const animateText = () => {
      if (i < text.length-1) {
        setAnimatedText((prevText) => prevText + text[i]);
        i++;
        animationTimeout = setTimeout(animateText, 75); // Ajusta el tiempo de animación aquí
      } }; 
     animateText();

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [text]);

  return <div>{animatedText}</div>;
}

export default AnimatedText;



export function AnimatedTextFt({ text}) {
  const [animatedText, setAnimatedText] = useState('');

  useEffect(() => {
    let animationTimeout;
    let i = 0;

    const animateText = () => {
      if (i < text.length-1) {
        setAnimatedText((prevText) => prevText + text[i]);
        i++;
        animationTimeout = setTimeout(animateText, 140); // Ajusta el tiempo de animación aquí
      } }; 
     animateText();

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [text]);

  return <div>{animatedText}</div>;
}

