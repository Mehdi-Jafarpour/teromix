import { useData } from '../context/DataContext';
import { IoIosArrowForward } from "react-icons/io";
import ProjectCarousel from './ProjetCarousel';

function Home() {
  const data = useData();
  
  if (!data) {
    return null; // Return null or a loading indicator if data is not available
  }

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[50vh] lg:h-[120vh] bg-cover bg-center flex flex-col justify-start items-center"
        style={{ backgroundImage: `url(${data.homebackphoto})`, paddingTop: '15vh' }}
      >
        {/* Logo */}
        <img
          src={data.logo}
          alt="Logo"
          className="w-[200px] sm:w-[300px] md:w-[400px] lg:w-[500px] xl:w-[700px] mb-4 sm:mb-6 md:mb-8" 
          
        />

        {/* Button */}
        <a
          href="https://online.flippingbook.com/view/316928134/?_gl=1*6z2fsu*_gcl_au*MTg0NDQyMTI3MC4xNzI5ODI3MzIx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-center px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 border border-black text-black rounded-md hover:bg-color2 hover:text-color1 transition min-w-[80px] sm:min-w-[90px] md:min-w-[200px]"
          style={{ borderRadius: '2px' }}
        >
          Teromix Profile 
          
        </a>
      </section>

      {/* About Section */}
      <section className="flex flex-col-reverse md:flex-row items-center py-40 mx-5 sm:mx-20" >
          
          <div className="lg:w-1/2">
            <img
              src={data.about[0]?.background2} 
              alt="About Background"
              className="w-full h-auto  object-cover"
            />
          </div>
          
         
          <div className=" lg:w-1/2 px-5 mb-2 ">
            <h2 className="text-2xl font-bold mb-4">
              {data.about[0]?.section1.title || 'About Us'}
            </h2>
            <p className="mb-10 text-justify">
              {data.about[0]?.section1.description.slice(0, 300) + '...'}
            </p>

            <a
                href="/about" 
                className="flex items-center justify-center px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 border border-black text-black rounded-md hover:bg-color2 hover:text-color1 transition max-w-40"
                style={{ borderRadius: '2px' }}
              >
                About Us
                <IoIosArrowForward className="ml-1" />
                </a>
          </div>
        </section>

      {/* Projects Slider Section */}
      <section id="projects-slider">
        <ProjectCarousel projects={data.projects} />
        
      </section>

      {/* Our Services Section */}
      <section className="py-10 my-10 p-20 flex flex-col items-center justify-center" style={{"backgroundColor": "#F5F5F5"}}>
      <h2 className="text-center text-2xl font-bold mb-4">{data?.services.title}</h2>
      <p className="text-center text-gray-600 mb-8 ">{data?.services.description.slice(0, 150) + '...'}</p>

      <div className="flex flex-col items-center gap-6 md:flex-row md:justify-center md:gap-10 mt-10">
        {/* Service 1 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full p-5 bg-color1 border-8 border-orange-100 flex items-center justify-center text-white text-3xl font-bold" >
            1
          </div>
          <h3 className="mt-4 text-lg font-semibold">Fit-Out and Joinery</h3>
          <p className="text-center text-gray-500">Ask us for any specific design and details.</p>
        </div>

        {/* Service 2 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full p-5 bg-color1 border-8 border-orange-100 flex items-center justify-center text-white text-3xl font-bold">
            2
          </div>
          <h3 className="mt-4 text-lg font-semibold">Interior Product</h3>
          <p className="text-center text-gray-500">We collaborate closely with designers to bring interior projects and fit-outs to life.</p>
        </div>

        {/* Service 3 */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full p-5 bg-color1 border-8 border-orange-100 flex items-center justify-center text-white text-3xl font-bold">
            3
          </div>
          <h3 className="mt-4 text-lg font-semibold">Art Works</h3>
          <p className="text-center text-gray-500">The TEROMIX team is prepared to create original interior artwork for any project.</p>
        </div>
      </div>
      <a
                href="/services" 
                className="flex items-center justify-center mt-10 px-3 py-1 sm:px-4 sm:py-2 md:px-5 md:py-2.5 border border-black text-black rounded-md hover:bg-color2 hover:text-color1 transition max-w-40"
                style={{ borderRadius: '2px' }}
              >
                Our Services
                <IoIosArrowForward className="ml-1" />
                </a>
    </section>

      {/* Partners Slider Section */}
      <section id="partners-slider">
        {/* We'll add more details here later */}
        <h2>Our Partners</h2>
      </section>
    </div>
  );
}

export default Home;

