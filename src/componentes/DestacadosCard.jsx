import React, { useState, useEffect } from 'react';

function DestacadosCard({ videos }) {
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const [isMobileView, setIsMobileView] = useState(false);
  const handleVideoClick = (index) => {
    setSelectedVideoIndex(index);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth < 700);
    };
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`grid ${isMobileView ? 'grid-cols-1' : 'grid-cols-2'} lg:grid-cols-3 sm:mt-10 sm:mx-10 gap-4 my-10 sm:my-20`}>
      {videos.map((video, index) => (
        <div
          key={index}
          className={`flex flex-col items-center mx-10 2xl:mx-0 my-10  ${index === selectedVideoIndex ? 'selected' : ''}`}
          onClick={() => handleVideoClick(index)}
        >
          <div className="aspect-video">
            <iframe
              className="w-full h-full" 
              src={video.embedUrl}
              style={{ border: 'none', overflow: 'hidden' }}
              allowFullScreen={true}
              scrolling='no'
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
          <p className="pt-2 font-bold text-center">{video.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default DestacadosCard;
