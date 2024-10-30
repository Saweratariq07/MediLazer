import React, { useState } from "react";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'; // Import icons

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = [
    {
      image: "1.png",
      title: "Facial Hair Removal",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu elementum pretium.",
    },
    {
      image: "2.png",
      title: "Arms Hair Removal",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu elementum pretium.",
    },
    {
      image: "3.png",
      title: "Legs Hair Removal",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu elementum pretium.",
    },
    {
      image: "1.png",
      title: "Facial Hair Removal",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu elementum pretium.",
    },
    {
      image: "2.png",
      title: "Arms Hair Removal",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu elementum pretium.",
    },
    {
      image: "3.png",
      title: "Legs Hair Removal",
      description: "Lorem ipsum dolor sit amet consectetur. Arcu elementum pretium.",
    },
  ];

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(slides.length / itemsPerSlide);

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? totalSlides - 1 : currentIndex - 1);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === totalSlides - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="relative max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center">
        <button
          className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black p-2 rounded-full hover:bg-yellow-600"
          onClick={prevSlide}
        >
          <FiChevronLeft size={24} /> 
        </button>

        <div className="overflow-hidden w-full">
          <div
            className={`flex flex-wrap sm:flex-nowrap transition-transform duration-500 ease-in-out`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="w-full sm:w-1/2 md:w-1/3 flex-shrink-0 px-2 mb-4"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-40 sm:h-48 md:h-60 lg:h-72 object-cover rounded-lg"
                />
                <div className="p-4 text-center">
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-[#e7cd22] via-[#b29f1f] to-[#373317] bg-clip-text text-transparent">
                    {slide.title}
                  </h2>
                  <p className="mt-2 text-gray-500">{slide.description}</p>
                  <div className="btn">
                            <button className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black py-2 px-4 rounded-md w-full md:w-auto animate-button">
                                Learn More
                            </button>
                        </div>
                </div>
              </div>
            ))}
          </div>
        </div>


        <button
          className="bg-gradient-to-r font-semibold from-[#e7cd22] via-[#b29f1f] to-[#373317] text-black p-2 rounded-full hover:bg-yellow-600"
          onClick={nextSlide}
        >
          <FiChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Slider;
