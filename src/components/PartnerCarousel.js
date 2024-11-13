import React from 'react';
import {Link} from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowForward } from 'react-icons/io';

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const PartnerCarousel = ({ partners }) => {
  return (
    <div className="py-10 h-full">
      <h2 className="text-center text-2xl font-bold mb-6">{partners?.title}</h2>
      <Carousel
        className='z-0'
        responsive={responsive}
        itemClass="px-4" 
        containerClass="mx-auto" 
      >
        {partners?.cards.map((card, index) => (
          <div
            key={index}
            className="w-full max-w-[250px] flex flex-col items-center mb-4 mx-auto"
          >
            <div className="border rounded-sm overflow-hidden shadow-lg w-full  min-h-[350px]">
              <img
                src={card.photos[0]} 
                alt={card.name}
                className="w-full h-48 object-cover p-2" 
                loading="lazy"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{card.name}</h3>
                <p className="text-gray-500 mt-2">
                  {card.description.slice(0, 50) + '...'}
                </p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
      <div className="flex justify-center mt-6">
        <Link
          to="/partners"
          className="inline-flex items-center justify-center px-3 py-2 border border-black text-black rounded-sm hover:bg-color2 hover:text-color1 transition min-w-40"
        >
          Our Partners <IoIosArrowForward />
        </Link>
      </div>
    </div>
  );
};

export default PartnerCarousel;
