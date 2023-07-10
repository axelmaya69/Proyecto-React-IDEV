import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { GrNext, GrPrevious } from "react-icons/gr";

function GridImg({ images }) {
const [selectedImage, setSelectedImage] = useState(null);
const [currentIndex, setCurrentIndex] = useState(0);

const openImage = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
};

const closeImage = () => {
    setSelectedImage(null);
};

const goToPreviousImage = () => {
    setCurrentIndex((prevIndex) => {
    const newIndex = (prevIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
    return newIndex;
    });
};

const goToNextImage = () => {
    setCurrentIndex((prevIndex) => {
    const newIndex = (prevIndex + 1) % images.length;
    setSelectedImage(images[newIndex]);
    return newIndex;
    });
};

return (
    <div className='lg:relative lg:z-50'>
    <div className='grid grid-cols-1 m-4 lg:grid-cols-2 gap-2 lg:gap-10 my-20 lg:z-50 '>
        <Fade cascade={true} damping={0.2}>
        {images.map((image, index) => (
            <div
            key={index}  
            onClick={() => openImage(image, index)}
            className='my-20 lg:m-5 z-50'
            >
            <img
            src={image}
            alt={`Image ${index + 1}`}
                className=' rounded shadow-2xl lg:hover:scale-110 transition-all duration-300 lg:cursor-pointer lg:z-50 border sm:border-2 border-black p-2 sm:p-4 lg:border-none'
        />
            </div>
        ))}
        </Fade>
    </div>
    {selectedImage && (
        <div className=' hidden  lg:fixed lg:top-0 lg:left-0 lg:right-0 lg:bottom-0 lg:flex lg:justify-center lg:items-center lg:bg-black lg:bg-opacity-75'>
        <img src={selectedImage} alt='Selected Image' className='lg:max-w-full lg:max-h-full px-4' />
        <button
        className='hidden lg:block lg:absolute lg:left-3 lg:text-left lg:bg-white lg:rounded-md px-3 py-1 lg:text-gray-700 lg:hover:bg-gray-400'
        onClick={goToPreviousImage}
        >
        <GrPrevious size={50}/>
        </button>
        <button
            className='hidden lg:block lg:absolute lg:right-3 lg:bg-white lg:rounded-md px-3 py-1 lg:text-gray-700 lg:hover:bg-gray-400'
            onClick={goToNextImage}
        >
            <GrNext size={50}/>
        </button>
        <button
            className='hidden lg:block lg:absolute top-4 lg:right-12 lg:bg-white lg:rounded-md px-3 py-1 lg:text-gray-700 lg:hover:bg-gray-400'
            onClick={closeImage}
        >
            X
        </button>
        </div>
    )}
    </div>
);
}
export default GridImg;