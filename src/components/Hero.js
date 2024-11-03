import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useData } from '../context/DataContext';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; // Import both icons

const Hero = () => {
  const data = useData();

  if (!data) {
    return null; // Return null or a loading indicator if data is not available
  }

  const slideImages = data.hero.map(item => ({
    image: item.photo,
    title: item.title,
  }));

  return (
    <section className="relative w-full h-[800px] overflow-hidden">
      <Slide 
        autoplay={true} 
        duration={4000} 
        transitionDuration={800}  
        prevArrow={<Arrow className="absolute left-0 mx-2 top-1/2 transform -translate-y-1/2 text-color1 text-4xl bg-gray-50 bg-opacity-20 rounded-full p-2 shadow-lg"><IoIosArrowBack /></Arrow>}
        nextArrow={<Arrow className="absolute right-0 mx-2 top-1/2 transform -translate-y-1/2 text-color1 text-4xl bg-gray-50 bg-opacity-20 rounded-full p-2 shadow-lg"><IoIosArrowForward /></Arrow>}
      >
        {slideImages.map((slide, index) => (
          <div className="each-slide-effect h-[800px]" key={index}>
            <div
              className="flex items-start sm:items-center justify-start h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <span className="text-white w-[40rem] text-4xl sm:text-6xl mt-20 sm:ml-20  p-4 rounded-lg text-start">
                {slide.title}
              </span>
            </div>
          </div>
        ))}
      </Slide>
    </section>
  );
};

// Custom arrow component
const Arrow = ({ className, children, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      {children} 
    </div>
  );
};

export default Hero;
