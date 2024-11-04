import { useState } from 'react';
import { useData } from '../context/DataContext';
import Masonry from 'react-masonry-css';
import ProjectCard from './ProjectCard';
import "./Projects.css"

function Projects() {
  const data = useData();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  if (!data || !data.projects) return null;

  const projectData = data.projects;
  const logo = data.logo;

  const categories = ['All', ...new Set(projectData.cards.map(card => card.category))];

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePhotoClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = selectedCategory === 'All'
    ? projectData.cards
    : projectData.cards.filter(card => card.category === selectedCategory);

  

  const breakpointColumnsObj = {
    default: 4, // 4 columns for large screens
    1024: 3,    // 3 columns for medium screens
    768: 2,     // 2 columns for small screens
    480: 1      // 1 column for very small screens
  };

  return (
    <>
      {/* Intro Section */}
      <section className="relative w-full h-[350px]">
        <div
          className="w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${projectData?.background})` }}
        >
          <div className="absolute w-[100px] sm:w-[200px] top-4 left-0 bg-white bg-opacity-60 p-2">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-6xl">{projectData?.title}</h1>
        </div>
      </section>

      {/* Category Filter */}
      <div className="mt-8 text-center">
        {categories.map((category) => (
          <span
            key={category}
            onClick={() => handleCategoryChange(category)}
            className={`cursor-pointer mx-2 mb-2 ${selectedCategory === category ? 'underline text-blue-500' : 'text-gray-700'}`}
          >
            {category}
          </span>
        ))}
      </div>

      {/* Divider Line */}
      <div className="my-4 mx-auto w-1/2 border-t border-gray-300" />

      {/* Photo Grid */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid mb-10"
        columnClassName="my-masonry-grid_column"
      >
        {filteredProjects.map((project) => (
          <div key={project.id} className="relative group">
            <img
              src={project.photos[0]}
              alt={project.client}
              className="w-full h-auto object-cover"
              
            />
            <div onClick={() => handlePhotoClick(project)} className="absolute inset-0 bg-black bg-opacity-50 cursor-pointer flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h2 className="text-white text-xl">{project.client}</h2>
            </div>
          </div>
        ))}
      </Masonry>

      {/* Modal for Project Details */}
      {isModalOpen && selectedProject && (
        <ProjectCard project={selectedProject} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default Projects;
