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
      <section className="flex flex-col-reverse md:flex-row items-center py-40 mx-5 sm:mx-20">
          
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
      <section id="our-services">
        {/* We'll add more details here later */}
        <h2>Our Services</h2>
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

