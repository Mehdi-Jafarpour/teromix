import { useData } from '../context/DataContext';

function Partners() {
  const data = useData();
  const partnersData = data.partners;
  const logo = data.logo;
  console.log(partnersData)
  
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
      </>
    );
  }
  
  export default Partners;