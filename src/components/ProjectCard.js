import React from 'react';
import Masonry from 'react-masonry-css';
import './ProjectCard.css'; // Custom styling

function ProjectCard({ project, onClose }) {
  // Masonry breakpoint columns for responsiveness
  const breakpointColumnsObj = {
    default: 3, // 3 columns for large screens
    1024: 2,    // 2 columns for medium screens
    768: 1      // 1 column for smaller screens
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 overflow-y-auto">
      <div className="bg-white p-6 rounded-lg relative w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 bg-gray-200 hover:bg-gray-300 p-2 rounded-full">
          Close
        </button>

        {/* Project Information */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">{project.client}</h2>
          <p className="text-gray-700">Location: {project.location}</p>
          <p className="text-gray-700">Date: {project.date}</p>
          <p className="text-gray-700">Size: {project.size}</p>
        </div>

        {/* Masonry Photo Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {project.photos.map((photo, index) => (
            <div key={index} className="masonry-item">
              <img
                src={photo}
                alt={`Project ${project.id}`}
                className="w-full h-full object-cover transition-transform transform hover:scale-105"
              />
            </div>
          ))}
        </Masonry>
      </div>
    </div>
  );
}

export default ProjectCard;
