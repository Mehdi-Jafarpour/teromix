import React from 'react';

function ProjectCard({ project, onClose }) {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-5 rounded">
        <button onClick={onClose} className="absolute top-2 right-2">Close</button>
        <h2 className="text-2xl">{project.client}</h2>
        <p>Location: {project.location}</p>
        <p>Date: {project.date}</p>
        <p>Size: {project.size}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {project.photos.map((photo, index) => (
            <img key={index} src={photo} alt={`Project ${project.id}`} className="w-full h-auto object-cover" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
