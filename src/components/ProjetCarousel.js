import React from 'react';
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import { IoIosArrowForward } from 'react-icons/io'; 

const responsive = {
  superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 4 },
  desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
  tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
  mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
};

const ProjectCarousel = ({ projects }) => {
  return (
    <div className="py-10 text-center">
      <h2 className="text-center text-2xl font-bold mb-6">{projects.title}</h2>
      <Carousel responsive={responsive}>
        {projects.cards.map((project) => (
          <Link  to={"/projects"} >
            <div key={project.id} className="relative w-full h-[400px] p-2 mb-10">
              <img
                src={project.photos[1]} // Display the first photo from the array
                alt={project.client}
                className="w-full h-full object-cover rounded-sm"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300 rounded-sm flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{project.client}</span>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
      <a
          href="/projects"
          className="inline-flex items-center justify-center mt-4 px-3 py-2 border border-black text-black rounded-sm hover:bg-color2 hover:text-color1 transition min-w-40"
        >
          Projets <IoIosArrowForward />
        </a>
    </div>
  );
};

export default ProjectCarousel;
