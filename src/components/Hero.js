import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { useData } from '../context/DataContext';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io"; 

const Hero = () => {
  const data = useData();

  if (!data) {
    return null; 
  }

  const slideImages = data.hero.map(item => ({
    image: item.photo,
    title: item.title,
  }));

  return (
    <section className="relative w-full h-full overflow-hidden">
      <Slide 
  
        autoplay={true} 
        duration={6000} 
        transitionDuration={800}  
        pauseOnHover={false}
        prevArrow={<Arrow className="hidden md:block absolute left-0 mx-2 top-1/2 transform -translate-y-1/2 text-color1 text-4xl bg-gray-50 bg-opacity-20 rounded-full p-2 "><IoIosArrowBack /></Arrow>}
        nextArrow={<Arrow className="hidden md:block absolute right-0 mx-2 top-1/2 transform -translate-y-1/2 text-color1 text-4xl bg-gray-50 bg-opacity-20 rounded-full p-2 "><IoIosArrowForward /></Arrow>}
      >
        {slideImages.map((slide, index) => (
          <div className="each-slide-effect h-screen" key={index}>
            <div
              className="flex items-start sm:items-center justify-start h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <span className=" w-full  md:w-[30rem] lg:w-[40rem] h[50%] sm:h-full text-[#fdc500] bg-gray-800 bg-opacity-60 font-semibold text-2xl sm:text-3xl lg:text-4xl   p-10 pt-20 sm:pt-60 text-start" >
                {slide.title}
              </span>
            </div>
          </div>
        ))}
      </Slide >
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
