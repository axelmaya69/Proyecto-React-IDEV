import React, { useState, useEffect } from 'react';

function Slider({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPreviousSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 12000);

    return () => {
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="relative overflow-hidden">
      <div className="slider-wrapper flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="slider-slide min-w-full h-1/4"
          />
        ))}
      </div>
      <button className="slider-control left-0 top-1/2 transform -translate-y-1/2 absolute px-2 sm:px-4 sm:text-lg sm:ml-6 sm:py-4 text-xs ml-2 py-2 rounded-full bg-gray-500 text-white opacity-50 hover:opacity-80" onClick={goToPreviousSlide}>
        &lt;
      </button>
      <button className="slider-control right-0 top-1/2 transform -translate-y-1/2 absolute px-2 text-xs mr-2 py-2 rounded-full bg-gray-500 text-white opacity-50 hover:opacity-80 sm:px-4 sm:text-lg sm:ml-6 sm:py-4" onClick={goToNextSlide}>
        &gt;
      </button>
      <div className="flex justify-center mt-2">
        {images.map((_, index) => (
          <span
            key={index}
            className={`slider-dot w-1 h-1 sm:w-2 sm:h-2 lg:w-4 lg:h-4 rounded-full mx-1 ${index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'}`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider;
