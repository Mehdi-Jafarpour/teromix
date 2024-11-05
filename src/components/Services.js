import { useData } from '../context/DataContext';
import { Link } from 'react-router-dom'; // Import Link for navigation

function Services() {
  const data = useData();
  const servicetData = data.services;
  const logo = data.logo;
  console.log(servicetData)

  return (
    <>
      {/* Intro Section */}
      <section className="relative w-full h-[350px]">
        <div
          className="w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${servicetData?.background})` }}
        >
          <div className="absolute w-[100px] sm:w-[200px] top-4 left-0 bg-white bg-opacity-60 p-2">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-6xl">{servicetData?.title}</h1>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="flex flex-col items-center justify-center text-center mb-8">
          <h2 className="text-3xl font-bold text-color1">{servicetData?.title}</h2>
          <p className="w-[70%] lg:w-1/2 text-gray-700 text-xl my-5 text-justify">{servicetData?.description}</p>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {servicetData.cards?.map((card, index) => (
              <Link 
                key={index} 
                to="/projects" // Change this to the correct path for Projects.js
                className="bg-black text-white overflow-hidden" // Removed transform classes from card
                style={{ width: '250px', height: '520px' }}
              >
                <h3 className="text-xl font-semibold text-center mt-2">{card.title}</h3>
                <img 
                  src={card.photo} 
                  alt={card.title} 
                  className="w-full h-auto object-cover mt-5 transition-transform transform hover:scale-105" // Added hover effect on image only
                />
              </Link>
            ))}
          </div>
        </div>
        
      </section>
    </>
  );
}

export default Services;
