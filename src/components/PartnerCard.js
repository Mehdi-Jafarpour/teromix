import React, { useState } from 'react';
import Masonry from 'react-masonry-css';
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css'; 
import './PartnersCard.css'; 

function PartnersCard({ partner, onClose }) {
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
        <button onClick={onClose} className="absolute top-3 right-3 text-white bg-black hover:text-color1 p-2">
          Close
        </button>

        {/* Masonry Photo Grid */}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="masonry-grid"
          columnClassName="masonry-grid_column"
        >
          {/* Partner Information */}
          <div className="masonry-item space-y-4 p-5 border">
            <h2 className="text-2xl font-semibold">{partner.name}</h2>
            <p className="text-gray-700">{partner.description}</p>
            <p className="text-gray-700">Materials: {partner.material}</p>
            {partner.link && (
              <a
              href={partner.link} 
              target="_blank"
              rel="noopener noreferrer"
              className="min-w-[200px] p-2 flex items-center justify-center border border-black text-black rounded-md hover:bg-color2 hover:text-color1 transition "
              style={{ borderRadius: '2px' }}
            >
              View The Full Catalog 
              
              </a>
            )}
          </div>

          {partner.photos.map((photo, index) => (
            <div key={index} className="masonry-item">
              <img
                src={photo}
                alt={`Partner ${partner.id}`}
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
            mainSrc={partner.photos[photoIndex]}
            nextSrc={partner.photos[(photoIndex + 1) % partner.photos.length]}
            prevSrc={partner.photos[(photoIndex + partner.photos.length - 1) % partner.photos.length]}
            onCloseRequest={() => setIsOpen(false)}
            onMovePrevRequest={() =>
              setPhotoIndex((photoIndex + partner.photos.length - 1) % partner.photos.length)
            }
            onMoveNextRequest={() =>
              setPhotoIndex((photoIndex + 1) % partner.photos.length)
            }
          />
        )}
      </div>
    </div>
  );
}

export default PartnersCard;
