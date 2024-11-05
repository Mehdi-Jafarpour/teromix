import { useState } from 'react';
import { useData } from '../context/DataContext';
import PartnerCard from './PartnerCard';
import { IoIosArrowForward } from 'react-icons/io';


function Partners() {
  const data = useData();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPartner, setSelectedPartner] = useState(null);

  if (!data || !data.partners) return null;
  const partnersData = data.partners;
  const logo = data.logo;

  const handleCardClick = (partner) => {
    setSelectedPartner(partner);
    setIsModalOpen(true);
  };

  return (
    <>
      {/* Intro Section */}
      <section className="relative w-full h-[350px]">
        <div
          className="w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${partnersData?.background})` }}
        >
          <div className="absolute w-[100px] sm:w-[200px] top-4 left-0 bg-white bg-opacity-60 p-2">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-6xl">{partnersData?.title}</h1>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 flex flex-col items-center justify-center">
        <h1 className="text-color1 text-3xl font-semibold my-5">{partnersData?.title}</h1>
        <div className="w-[80%] h-full flex flex-col md:flex-row items-center justify-around flex-wrap truncate">
          {partnersData?.cards.map((card, index) => (
            <div
              key={index}
              className="w-full max-w-[250px] flex flex-col items-center my-4 mx-auto"
            >
              <div className="border rounded-sm overflow-hidden shadow-lg w-full min-h-[350px]">
                <img
                  src={card.photos[0]} 
                  alt={card.name}
                  className="w-full h-48 object-cover p-2" 
                  loading="lazy"
                />
                <div className="p-4 flex flex-col items-center justify-center">
                  <h3 className="text-lg font-semibold">{card.name}</h3>
                  <p className="text-gray-500 mt-2 text-wrap">
                    {card.description.slice(0, 50) + '...'}
                  </p>
                </div>
                <div className="flex justify-center my-6">
                    <div
                      onClick={() => handleCardClick(card)}
                      className="inline-flex items-center justify-center px-3 py-2 border border-black text-black rounded-sm hover:bg-color2 hover:text-color1 transition min-w-40"
                    >
                      More <IoIosArrowForward />
                    </div>
                </div>
              </div>
                  
            </div>
          ))}
        </div>
      </section>
      {isModalOpen && selectedPartner && (
        <PartnerCard partner={selectedPartner} onClose={() => setIsModalOpen(false)} />
      )}
    </>
  );
}

export default Partners;
