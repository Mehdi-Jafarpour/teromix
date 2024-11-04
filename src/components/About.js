import React from 'react';
import { useData } from '../context/DataContext';

// Card component to reuse
const Card = ({ title, photo, description }) => {
  return (
    <div className="w-[300px] h-auto border-gray-300 border overflow-hidden m-5 shadow-md">
      <div className="bg-black text-color1 text-center py-2">{title}</div>
      <img src={photo} alt={title} className="w-full h-[200px] object-cover" />
      <div className="p-4">
        <p className="text-sm text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const About = () => {
  const data = useData();

  if (!data || !data.about) return null; // Return null or a loading indicator if data is not available

  const aboutData = data.about[0];
  const logo = data.logo;

  return (
    <>
      {/* Intro Section */}
      <section className="relative w-full h-[350px]">
        {/* Background Image */}
        <div
          className="w-full h-full bg-cover bg-center z-0"
          style={{ backgroundImage: `url(${aboutData?.background1})` }}
        >
          {/* Logo */}
          <div className="absolute w-[100px] sm:w-[200px] top-4 left-0 bg-white bg-opacity-60 p-2">
            <img src={logo} alt="Logo" />
          </div>
        </div>

        {/* Title */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <h1 className="text-white text-6xl">{aboutData?.title}</h1>
        </div>
      </section>

      {/* Section 1: Who We Are */}
      <section className="flex flex-col lg:flex-row items-center justify-around px-4 py-8 lg:px-16 mt-20">
        {/* Text Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl text-color1 font-semibold mb-4">{aboutData?.section1?.title}</h2>
          <p className="text-lg leading-relaxed text-justify">{aboutData?.section1?.description}</p>
        </div>

        {/* Photo */}
        <div className="">
          <img
            src={aboutData?.section1?.photo}
            alt="Who We Are"
            className="w-[400px] h-[400px] object-cover mt-5 lg:mt-0"
          />
        </div>
      </section>

      {/* Section 2: Why Us */}
      <section className="flex flex-col lg:flex-row items-center justify-around px-4 py-8 lg:px-16 mt-20">
        {/* Photo */}
        <div className="">
          <img
            src={aboutData?.section2?.photo}
            alt="Who We Are"
            className="w-[400px] h-auto object-cover mb-5 lg:mb-0"
          />
        </div>
        {/* Text Content */}
        <div className="lg:w-1/2 text-left">
          <h2 className="text-4xl text-color1 font-semibold mb-4">{aboutData?.section2?.title}</h2>
          <p className="text-lg leading-relaxed text-justify">{aboutData?.section2?.description}</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="px-4 py-8 lg:px-16 mt-20 border border-gray-300 m-2 lg:m-5">
        <h2 className="text-4xl text-color2 font-semibold mb-8 text-center">{aboutData?.section3?.title}</h2>
        {/* Container for Cards */}
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
          {aboutData?.section3?.cards?.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              photo={card.photo}
              description={card.description}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
