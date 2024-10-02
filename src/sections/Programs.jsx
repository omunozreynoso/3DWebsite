import React, { useState, useEffect } from "react";
import { programLang } from '../constants/index.js';

const Programs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Start with the first SVG
  const [isManualChange, setIsManualChange] = useState(false);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % programLang.length);
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + programLang.length) % programLang.length);
  };

  const handleClick = (index) => {
    setActiveIndex(index);
    setIsManualChange(true); // Set manual change flag
  };

  // Automatically go to the next slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isManualChange) {
        nextSlide();
      }
    }, 3000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, [isManualChange]);

  useEffect(() => {
    // Reset the manual change flag after a click
    if (isManualChange) {
      const timeout = setTimeout(() => {
        setIsManualChange(false);
      }, 3000); // Wait for the duration of the auto-scroll

      return () => clearTimeout(timeout); // Cleanup timeout
    }
  }, [activeIndex, isManualChange]);

  return (
    <div className="flex flex-col items-center w-full">
      <section className="c-space my-20 flex justify-start w-full px-5">
        <h3 className="head-text">Known Programming Languages</h3>
      </section>

      <div className="relative w-full max-w-4xl flex justify-center overflow-hidden h-48">
        {programLang.map((svg, index) => {
          const isActive = index === activeIndex;
          const isPrev = index === (activeIndex - 1 + programLang.length) % programLang.length;
          const isNext = index === (activeIndex + 1) % programLang.length;

          let sizeClass = "opacity-40 transition-all duration-500"; // Add transition effect
          if (isActive) sizeClass = "w-1/2 shadow-lg opacity-100 transition-all duration-500";
          if (isPrev || isNext) sizeClass = "w-1/4 opacity-60 transition-all duration-500";

          return (
            <div
              key={svg.id}
              className={`flex items-center justify-center absolute ${sizeClass} transform`}
              onClick={() => handleClick(index)}
              style={{ zIndex: isActive ? 10 : 1 }}
            >
              <div className="bg-white shadow-md rounded-lg p-4 mx-2 flex items-center justify-center overflow-hidden h-32 w-full">
                <img 
                  src={svg.path} 
                  alt={svg.name} 
                  className="w-full h-full object-contain" 
                />
              </div>
            </div>
          );
        })}
      </div>

        <div className="flex justify-between items-center w-full px-5 mt-4">
            <button className="arrow-btn" onClick={prevSlide}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
            </button>

            <h3 className="text-xl font-semibold text-white text-center w-full mx-4 shadow-md p-2 bg-gray-800 rounded-lg">
                {programLang[activeIndex].name}
            </h3>

            <button className="arrow-btn" onClick={nextSlide}>
                <img src="/assets/right-arrow.png" alt="right arrow" className="w-4 h-4" />
            </button>
        </div>

    </div>
  );
};

export default Programs;
