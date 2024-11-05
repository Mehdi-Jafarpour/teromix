import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css'; 
import './ProjectCard.css'; 

function ProjectCard({ project, onClose }) {
  // State to handle the lightbox
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  // Masonry breakpoint columns for responsiveness
  const breakpointColumnsObj = {
    default: 3, // 3 columns for large screens
    1024: 2,    // 2 columns for medium screens
    768: 1      // 1 column for smaller screens
  };

  const openLightbox = (index) => {
    setPhotoIndex(index);
    setIsOpen(true);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 overflow-y-auto">
      <div className="bg-white p-6 relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-white bg-black hover:text-color1 p-2 ">
          Close
        </button>

        {/* Masonry Photo Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {/* Project Information */}
          <div className="masonry-item space-y-4 p-5 border">
            <h2 className="text-2xl font-semibold">{project.client}</h2>
            <p className="text-gray-700">Location: {project.location}</p>
            <p className="text-gray-700">Date: {project.date}</p>
            <p className="text-gray-700">Size: {project.size}</p>
          </div>

          {project.photos.map((photo, index) => (
            <div key={index} className="masonry-item">
              <img
                src={photo}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover transition-transform transform hover:scale-105 cursor-pointer"
                onClick={() => openLightbox(index)}
                loading="lazy"
              />
            </div>
          ))}
        </Masonry>

        {/* Lightbox */}
        {isOpen && (
          <Lightbox
            mainSrc={project.photos[photoIndex]}
            nextSrc={project.photos[(photoIndex + 1) % project.photos.length]}
            prevSrc={project.photos[(photoIndex + project.photos.length - 1) % project.photos.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + project.photos.length - 1) % project.photos.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % project.photos.length)
            }
          />
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
