import React, { useState } from 'react';
import { useData } from '../context/DataContext';

const Artwork = () => {
  const data = useData();
  const [isOpen, setIsOpen] = useState(false);
  const [currentPhotos, setCurrentPhotos] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!data || !data.artwork) return null; 
  
  const artData = data.artwork;
  const logo = data.logo;

  // Open the gallery with specific photos
  const openGallery = (photos) => {
    setCurrentPhotos(photos);
    setCurrentIndex(0);
    setIsOpen(true);
  };

  // Navigate through images
  const nextPhoto = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % currentPhotos.length);
  };

  const prevPhoto = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? currentPhotos.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      {/* Intro Section */}
      <section className="relative w-full h-[350px]">
        <div
          className="w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${artData?.background})` }}
        >
          <div className="absolute w-[100px] sm:w-[200px] top-4 left-0 bg-white bg-opacity-60 p-2">
            <img src={logo} alt="Logo" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-6xl">{artData?.title}</h1>
        </div>
      </section>

      {/* Section 1: Metal Artwork */}
      <section className="flex flex-col lg:flex-row items-center justify-around px-4 py-8 lg:px-16 mt-20">
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl text-color1 font-semibold mb-4">{artData?.metalArt?.title}</h2>
          <p className="text-lg leading-relaxed text-justify">{artData?.metalArt?.des}</p>
          <button 
            className="m-4 p-2 flex items-center justify-center border border-black text-black rounded-md hover:bg-color2 hover:text-color1 transition"
            onClick={() => openGallery(artData?.metalArt?.photos)}
          >
            View More Photos
          </button>
        </div>
        <div className="">
          <img
            src={artData?.metalArt?.photos[3]}
            alt="metal artwork"
            className="w-[400px] h-[400px] object-cover mt-5 lg:mt-0 photo"
          />
        </div>
      </section>

      {/* Section 2: Signages */}
      <section className="flex flex-col lg:flex-row items-center justify-around px-4 py-8 lg:px-16 mt-20">
        <div className="">
          <img
            src={artData?.signage?.photos[6]}
            alt="signages"
            className="w-[400px] h-auto object-cover mb-5 lg:mb-0 photo"
          />
        </div>
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl text-color1 font-semibold mb-4">{artData?.signage?.title}</h2>
          <p className="text-lg leading-relaxed text-justify">{artData?.signage?.des}</p>
          <button 
            className="m-4 p-2 flex items-center justify-center border border-black text-black rounded-md hover:bg-color2 hover:text-color1 transition"
            onClick={() => openGallery(artData?.signage?.photos)}
          >
            View More Photos
          </button>
        </div>
      </section>

      {/* Fullscreen Gallery Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <button 
            className="absolute top-5 right-5 text-white text-2xl" 
            onClick={() => setIsOpen(false)}
          >
            ✕
          </button>
          <button 
            className="absolute left-5 text-white text-3xl" 
            onClick={prevPhoto}
          >
            ‹
          </button>
          <img 
            src={currentPhotos[currentIndex]} 
            alt="Gallery Image" 
            className="max-w-[90%] max-h-[80%] object-contain"
          />
          <button 
            className="absolute right-5 text-white text-3xl" 
            onClick={nextPhoto}
          >
            ›
          </button>
        </div>
      )}
    </>
  );
};

export default Artwork;
