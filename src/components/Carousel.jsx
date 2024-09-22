import React, { useState } from 'react';

const Carousel = () => {
  const [current, setCurrent] = useState(0);
  const images = [
    "https://images.unsplash.com/photo-1632215861513-130b66fe97f4?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1573164574397-dd250bc8a598?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  ];

  const handleNext = () => {
    setCurrent((current + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <div className="relative h-96 overflow-hidden">
      <img
        src={images[current]}
        alt={`Slide ${current + 1}`}
        className="w-full h-full object-cover"  
      />
      <div className="absolute inset-y-0 left-0 flex items-center">
        <button onClick={handlePrev} className="bg-gray-800 text-white p-2">Prev</button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center">
        <button onClick={handleNext} className="bg-gray-800 text-white p-2">Next</button>
      </div>
    </div>
  );
};

export default Carousel;
